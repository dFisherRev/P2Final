package com.revature;


import static org.junit.Assert.assertNotNull;
import static org.junit.Assert.assertTrue;

import java.util.ArrayList;
import java.util.Arrays;

import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;

import com.revature.daos.GameDAO;
import com.revature.models.Game;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class GameDAOTest {

	ArrayList<String> playerHand = new ArrayList<>(Arrays.asList("KING", "QUEEN"));
	ArrayList<String> dealerHand = new ArrayList<>(Arrays.asList("5", "ACE"));
	Game game = new Game("test2", 0, true, false, 100, 1000, 13, false, false, false, playerHand, 14, false, false, dealerHand);
	

	GameDAO GDAO = new GameDAO();
	
	
	@Test
	@Order(1)
	@DisplayName("Attempt to create a new game")
	void testNewGame() {
		GDAO.newGame(game);
	}
	
	@Test
	@Order(2)
	@DisplayName("Attempt to retrieve a game from the database")
	void testGetGame() {
		assertNotNull(GDAO.getGame(game.getId()));
	}
	
	
	@Test
	@Order(3)
	@DisplayName("Attempt to remove a game from the database")
	void testDeleteGame() {
		assertTrue(GDAO.deleteGame(game.getId()));
	}
}
