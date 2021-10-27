package com.revature.services;
import java.util.ArrayList;

import com.revature.daos.GameDAO;
import com.revature.daos.userDAO;
import com.revature.models.Card;
//Delete this comment
import com.revature.models.Game;
import com.revature.models.GameDTO;
import com.revature.models.User;
import com.revature.utils.JWTUtil;


public class GameService {
	
	GameDAO GDAO = new GameDAO();
	userDAO UDAO = new userDAO();
	
	public Game startGame(GameDTO gameDTO) {
		//Take a game object passed from the handler and send it to the DAO to be stored
		//This method returns the ID of the game for the front end to track
		Game game = new Game();
		int gameState=0;
		boolean blackjack=false;
		boolean isPush=false;
		String id=gameDTO.getDeck_id();
		int bet=gameDTO.getBet();
		
		User player = UDAO.getUserByCredentials(JWTUtil.decode(gameDTO.getJWTtoken()));
		
		int chips = player.getChipCount();
		chips = chips-bet;
		
		player.setChipCount(chips);
		UDAO.addUser(player);
	
		ArrayList<String> playerHand = new ArrayList<String>();
		ArrayList<String> dealerHand = new ArrayList<String>();
		
		
		
		for (int i=0; i<gameDTO.getPlayerHand().length; i++) {
			Card card = gameDTO.getPlayerHand()[i];
			playerHand.add(card.getValue());
		}
		
		for (int i=0; i<gameDTO.getDealerHand().length; i++) {
			Card card = gameDTO.getDealerHand()[i];
			dealerHand.add(card.getValue());
		}
		
		int playerTotal=game.getHandValue(playerHand);
		int dealerTotal=game.getHandValue(dealerHand);
		
		if (playerTotal==21&&dealerTotal!=21) {
			blackjack=true;
			gameState=1;
		}
		else if (playerTotal==21&&dealerTotal==21) {
			isPush = true;
			gameState=4;
		}
		Game newGame = new Game(id, gameState, true, true, isPush, false, bet, playerTotal, true, false, blackjack, false, false, false, false, playerHand, dealerTotal, false, false, dealerHand);
		
		if (blackjack) {
			int payout = newGame.getPlayerBet()/2;
			payout = payout*5;
			payout = payout+player.getChipCount();
			player.setChipCount(payout);
			UDAO.addUser(player);
		}
		else if (isPush) {
			int payout = newGame.getPlayerBet()+player.getChipCount();
			player.setChipCount(payout);
			UDAO.addUser(player);
		}
		
		GDAO.newGame(newGame);
		return newGame;
	}
	
	public Game hit(GameDTO GDTO) {
		
		Game game = GDAO.getGame(GDTO.getDeck_id());
		
		ArrayList<String> playerHand = new ArrayList<String>();
		
		for (int i=0; i<GDTO.getPlayerHand().length; i++) {
			Card card = GDTO.getPlayerHand()[i];
			playerHand.add(card.getValue());
		}
		
		int playerTotal = game.getHandValue(playerHand);
		
		game.setPlayerTotal(playerTotal);
		game.setPlayerHand(playerHand);
		
		if (playerTotal>21) {
			game.setPlayerBust(true);
			game.setGameState(2);
		}
		
		GDAO.betterUpdateMethod(game);
		
		return game;
	}
	
	public Game dealerHit(GameDTO GDTO) {
		Game game = GDAO.getGame(GDTO.getDeck_id());
		User user = UDAO.getUserByCredentials(JWTUtil.decode(GDTO.getJWTtoken()));
		
		ArrayList<String> dealerHand = new ArrayList<String>();
		
		for (int i=0; i<GDTO.getPlayerHand().length; i++) {
			Card card = GDTO.getPlayerHand()[i];
			dealerHand.add(card.getValue());
		}
		
		int dealerTotal = game.getHandValue(dealerHand);
		
		game.setDealerTotal(dealerTotal);
		game.setDealerHand(dealerHand);
		
		if (16<dealerTotal&&dealerTotal<22) {
			game.setDealerStanding(true);
			
			if (game.getPlayerTotal()>dealerTotal) {
				int payout = game.getPlayerBet()*2;
				user.setChipCount(user.getChipCount()+payout);
				UDAO.addUser(user);
				game.setGameState(1);
			}
			else if (game.getPlayerTotal()==dealerTotal) {
				user.setChipCount(user.getChipCount()+game.getPlayerBet());
				UDAO.addUser(user);
				game.setGameState(4);
			}
			else
				game.setGameState(3);
		}
		
		else if (dealerTotal>21) {
			
			game.setDealerBust(true);
			game.setGameState(1);
			int payout = game.getPlayerBet()*2;
			user.setChipCount(user.getChipCount()+payout);
			UDAO.addUser(user);
		}
		
		GDAO.betterUpdateMethod(game);
		
		return game;
	}
	
	public Game stand(GameDTO GDTO) {
		
		Game game = GDAO.getGame(GDTO.getDeck_id());
		
		game.setPlayerStanding(true);
		game.setPlayersTurn(false);
		
		GDAO.betterUpdateMethod(game);
		
		return game;
		
	}
	
	public Game doubleDown(GameDTO GDTO) {
		
		Game game = GDAO.getGame(GDTO.getDeck_id());
		
		int bet = game.getPlayerBet();
		bet = bet*2;
		game.setPlayerBet(bet);
		game.setPlayerHasDoubledDown(true);
		
		GDAO.betterUpdateMethod(game);
		
		return game;
		
	}
	
	public void endGame(String id) {
		//Delete a game from the table
		//Anything else we need to do at the end of the game can go in here
		GDAO.deleteGame(id);
	}
	
}