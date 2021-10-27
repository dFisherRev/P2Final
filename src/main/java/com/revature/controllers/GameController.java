package com.revature.controllers;

import com.google.gson.Gson;
import com.revature.models.Game;
import com.revature.models.GameDTO;
import com.revature.services.GameService;

import io.javalin.http.Handler;

public class GameController {
	
	GameService GS = new GameService();
	Gson gson = new Gson();
	
	public Handler startGameHandler = (ctx) -> {
		
		//if(ctx.req.getSession(false) != null) {
		
			GameDTO GDTO = gson.fromJson(ctx.body(), GameDTO.class);
		
			Game game=GS.startGame(GDTO);
		
			String JSONGame = gson.toJson(game);
		
			ctx.status(200);
			ctx.result(JSONGame);
		//}
		
		//else {
		//	ctx.status(403); 
		//}
	};
	
	public Handler doubleDownHandler = (ctx) -> {
		
		if(ctx.req.getSession(false) != null) {
		
			GameDTO GDTO = gson.fromJson(ctx.body(), GameDTO.class);
		
			Game game = GS.doubleDown(GDTO);
		
			String JSONGame = gson.toJson(game);
		
			ctx.status(200);
			ctx.result(JSONGame);
		}
		
		else {
			ctx.status(403); 
		}
	};
	
	public Handler standHandler = (ctx) -> {
		
		if(ctx.req.getSession(false) != null) {
		
			GameDTO GDTO = gson.fromJson(ctx.body(), GameDTO.class);
		
			Game game = GS.stand(GDTO);
		
			String JSONGame = gson.toJson(game);
		
			ctx.status(200);
			ctx.result(JSONGame);
		}
		
		else {
			ctx.status(403); 
		}
		
	};
	
	public Handler playerHitHandler = (ctx) -> {
		
		if(ctx.req.getSession(false) != null) {
		
			GameDTO GDTO = gson.fromJson(ctx.body(), GameDTO.class);
			System.out.println(GDTO.getDeck_id());
			System.out.println((GDTO.getPlayerHand()));
			Game game = GS.hit(GDTO);
		
			String JSONGame = gson.toJson(game);
		
			ctx.status(200);
			ctx.result(JSONGame);
		}
		
		else {
			ctx.status(403); 
		}
		
	};
	
	//Note that when calling this the hand passed from the front end must be called playerHand
	public Handler dealerHitHandler = (ctx) -> {
		
		if(ctx.req.getSession(false) != null) {
		
			GameDTO GDTO = gson.fromJson(ctx.body(), GameDTO.class);
		
			Game game = GS.dealerHit(GDTO);
		
			String JSONGame = gson.toJson(game);
		
			ctx.status(200);
			ctx.result(JSONGame);
		}
		
		else {
			ctx.status(403); 
		}
	};
}