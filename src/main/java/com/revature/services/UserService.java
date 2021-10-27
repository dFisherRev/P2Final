package com.revature.services;

import com.revature.daos.userDAO;
import com.revature.models.User;

public class UserService {
	
	userDAO ud = new userDAO();
	
	public int getChipCount(int id) {
		
		User user = ud.getUserByID(id);
		int chips = user.getChipCount();
		return chips;
	}
	
	public void updateChipCount(int id, int chips) {
		
		User user = ud.getUserByID(id); //get user
		int updatedChipCount = user.getChipCount() + chips; //update chip count
		ud.updateChipCount(id, updatedChipCount); //merge changes to db
		
	}
	
	public void addUser(User user) {
			ud.addUser(user);
	}
	
	//public user getUser() {
	//	
	//}
}
