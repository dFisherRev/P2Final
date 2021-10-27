package com.revature;

import java.util.ArrayList;
import java.util.List;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.revature.controllers.LoginController;
import com.revature.controllers.QuoteController;
import com.revature.daos.QuoteDAO;
import com.revature.controllers.GameController;
import com.revature.models.Card;
import com.revature.models.Deck;

import io.javalin.Javalin;


public class Launcher {

	
	
	public static void main(String[] args) {
		
	LoginController lc = new LoginController(); 
	QuoteController QC = new QuoteController();
	GameController GC = new GameController();
	
	//Logger log = LogManager.getLogger(QuoteDAO.class);
	//log.info("API is up and running");
	
	Javalin app = Javalin.create(
			config -> {
				config.enableCorsForAllOrigins();
			}
			).start(8090);
	
	
	
	app.post("/game/start", GC.startGameHandler);
	app.post("/game/hit/player", GC.playerHitHandler);
	app.post("/user/login", lc.loginHandler);
	app.post("/user/register", lc.registrationHandler);
	app.post("/user/friends", lc.friendsHandler);
	app.post("/user/get", lc.getUserHandler);
	app.post("/user/update", lc.updateUserHandler);
	app.post("/user/chips", lc.sendChipsHandler);
	app.post("/game/hit/dealer", GC.dealerHitHandler);
	app.post("/game/stand", GC.standHandler);
	app.post("/game/doubledown", GC.doubleDownHandler);
	app.post("/quotes", QC.quoteHandler);
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	/*public static void main(String[] args) {
		
		String jsonString = "{\r\n"
				+ "    \"success\": true,\r\n"
				+ "    \"deck_id\": \"x8xzusw5w5qj\",\r\n"
				+ "    \"cards\": [\r\n"
				+ "        {\r\n"
				+ "            \"code\": \"4D\",\r\n"
				+ "            \"image\": \"https://deckofcardsapi.com/static/img/4D.png\",\r\n"
				+ "            \"images\": {\r\n"
				+ "                \"svg\": \"https://deckofcardsapi.com/static/img/4D.svg\",\r\n"
				+ "                \"png\": \"https://deckofcardsapi.com/static/img/4D.png\"\r\n"
				+ "            },\r\n"
				+ "            \"value\": \"4\",\r\n"
				+ "            \"suit\": \"DIAMONDS\"\r\n"
				+ "        },\r\n"
				+ "        {\r\n"
				+ "            \"code\": \"QD\",\r\n"
				+ "            \"image\": \"https://deckofcardsapi.com/static/img/QD.png\",\r\n"
				+ "            \"images\": {\r\n"
				+ "                \"svg\": \"https://deckofcardsapi.com/static/img/QD.svg\",\r\n"
				+ "                \"png\": \"https://deckofcardsapi.com/static/img/QD.png\"\r\n"
				+ "            },\r\n"
				+ "            \"value\": \"QUEEN\",\r\n"
				+ "            \"suit\": \"DIAMONDS\"\r\n"
				+ "        }\r\n"
				+ "    ],\r\n"
				+ "    \"piles\": {\r\n"
				+ "        \"dealerhand\": {\r\n"
				+ "            \"remaining\": 0\r\n"
				+ "        },\r\n"
				+ "        \"playerhand\": {\r\n"
				+ "            \"remaining\": 2\r\n"
				+ "        }\r\n"
				+ "    }\r\n"
				+ "}";
		List<Card> newCards = new ArrayList<Card>();
		Gson gson = new GsonBuilder().create();
		Deck r = gson.fromJson(jsonString, Deck.class);
		
		for (Card card : r.getCards()) {
			newCards.add(card);
		}
		
		for(Card card : newCards) {
			card.readVal(card.getValue());
			card.setDeck_id(r.getDeck_id());
			System.out.println(card);
		}
		
		Javalin app = Javalin.create(
				config -> {
					config.enableCorsForAllOrigins(); //allows the server to process JS requests from anywhere
				}
				).start(8090);
		app.post("/login", lc.loginHandler);
		
		
		
		
	}*/

}