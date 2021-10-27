package com.revature.daos;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

import com.revature.models.Game;
import com.revature.utils.HibernateUtil;

public class GameDAO {
	
	Logger log = LogManager.getLogger(GameDAO.class);

	//This method can both add a new game to the database and update an existing game
	//I'm keeping the name so I don't have to change it everywhere else
	//Pretend this method is called Create/UpdateGame
	public boolean newGame(Game game) {
		//Take the game passed from the service layer and store it in the games table
		//Return a boolean to confirm it was successfully stored
		boolean isSuccessful;
		Session ses = HibernateUtil.getSession();
		//if (ses!=null) {
		Transaction tran = ses.beginTransaction();

			ses.saveOrUpdate(game);
			isSuccessful=true;
			tran.commit();

			HibernateUtil.closeSession();
			log.info("New game started");
		//}
		//else
		//	isSuccessful=false;
		
		return isSuccessful;
	}
	
	
	public Game getGame(String id) {
		//Pass in a game ID and return the game object
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		//List<Game> gameList = ses.createQuery("FROM com.revature.models.Game").list();
		Game game = ses.get(Game.class, id);
		tran.commit();
		HibernateUtil.closeSession();
		log.info("Game object retrieved from database");
		
		return game;
	}
	
	public boolean deleteGame(String id) {
		//Delete a game with the specified ID, then return a boolean telling you if it was successful
		Session ses = HibernateUtil.getSession();
		
		if (ses!=null) {
			Transaction tran = ses.beginTransaction();
			Game game = ses.get(Game.class, id);
			ses.delete(game);
			tran.commit();
			HibernateUtil.closeSession();
			return true;
		}
		else {
			System.out.println("Error");
			return false;
		}
		
	}
	
	public void betterUpdateMethod(Game game) {
		
		Session ses = HibernateUtil.getSession();
		Transaction tran = ses.beginTransaction();
		
		ses.merge(game);
		tran.commit();
		HibernateUtil.closeSession();
	}
	
}
