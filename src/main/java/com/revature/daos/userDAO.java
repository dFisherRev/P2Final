package com.revature.daos;
import java.util.List;

import javax.persistence.Query;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.hibernate.Session;
import org.hibernate.Transaction;

import com.revature.models.User;
import com.revature.utils.HibernateUtil;

public class userDAO{
	
	Logger log = LogManager.getLogger(GameDAO.class);
	
	public User getUserByID(int id) { 
		Session ses = HibernateUtil.getSession();
		
		User user = ses.get(User.class, id); //gets user by ID
		HibernateUtil.closeSession();
		
		return user;
	}	

	@SuppressWarnings("unchecked")
	public User getUserByCredentials(String username) {
		Session ses = HibernateUtil.getSession();
		
		List<User> userList = ses.createQuery("FROM com.revature.models.User").list();
		
		for (int i=0; i<userList.size(); i++) {
			if (userList.get(i).getUsername().equals(username))
				return userList.get(i);
		}
		HibernateUtil.closeSession();
		
		log.info("User retrieved from database");
		
		return null;
	}
	
	public void deleteUser(String username, String password) {
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		
		String hql = "delete from User where username='" + username + "' AND password='" + password + "'";
		Query query = ses.createQuery(hql);
		query.executeUpdate();
		
		tran.commit();
		HibernateUtil.closeSession();
	}
	
	public void addUser(User user) {
		
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		ses.saveOrUpdate(user);
		tran.commit();
		HibernateUtil.closeSession();
		
		log.info("New user registered/Profile updated");
		
	}
	

	public void updateChipCount(String id, int chips) {
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		
		User user = ses.get(User.class, 2); //change PK to username //get user obj from db
		
		ses.evict(user); //detach user
		user.setChipCount(chips); //set detached users chipcount
		
		ses.merge(user); //merge detached user to db
		
		tran.commit();
		HibernateUtil.closeSession();
	}
	
	public void updateUserInfo(User user) {
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		
		ses.merge(user);
		
		tran.commit();
		HibernateUtil.closeSession();
		
		log.info("User's chip count was updated");
	}
}
