package com.revature;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

import com.revature.models.Game;

class GameTest {

	Game testGame = new Game();
	
	@Test
	void testHitandGetTotals() {
		testGame.hitDealer("KING");
		testGame.hitDealer("7");
		testGame.hitPlayer("ACE");
		testGame.hitPlayer("8");
		assert(testGame.getPlayerTotal() == 19);
		assert(testGame.getDealerTotal() == 17);
	}
	
	@Test
	void testDealerStandsAt17() {
		testGame.hitDealer("KING");
		testGame.hitDealer("7");
		assert(testGame.getDealerTotal() == 17);
		assert(testGame.isDealerStanding());
	}
	
	@Test
	void testAcesWork() {
		testGame.hitDealer("KING");
		testGame.hitDealer("ACE");
		assert(testGame.isDealerStanding());
		assert(testGame.getDealerTotal() == 21);
		testGame.hitPlayer("ACE");
		testGame.hitPlayer("ACE");
		testGame.hitPlayer("ACE");
		assert(testGame.getPlayerTotal() == 13);
	}
	@Test
	void testDoubleDownFails() {
		testGame.hitPlayer("ACE");
		testGame.hitPlayer("ACE");
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(40);
		assert(!testGame.playerCanDoubleDown());
	}
	@Test
	void testDoubleDownSucceeds() {
		testGame.hitPlayer("ACE");
		testGame.hitPlayer("ACE");
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(50);
		assert(testGame.playerCanDoubleDown());
		testGame.doubleDown("KING");
		assert(testGame.getPlayerBet() == 100);
		assert(testGame.getPlayerTotal() == 12);
	}
	
	@Test
	void testDoubleDownOnce() {
		testGame.hitPlayer("1");
		testGame.hitPlayer("1");
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(50);
		assert(testGame.playerCanDoubleDown());
		testGame.doubleDown("ACE");
		assert(testGame.getPlayerBet() == 100);
		assert(testGame.getPlayerTotal() == 13);
		assert(!testGame.playerCanDoubleDown());
	}
	@Test
	void testDoubleDownOnceAndLose() {
		testGame.hitPlayer("1");
		testGame.hitPlayer("1");
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(50);
		assert(testGame.playerCanDoubleDown());
		testGame.doubleDown("ACE");
		assert(testGame.getPlayerBet() == 100);
		assert(testGame.getPlayerTotal() == 13);
		assert(!testGame.playerCanDoubleDown());
		testGame.hitDealer("ACE");
		testGame.hitDealer("KING");
		assert(!testGame.isPlayerWinning());
	}
	
	@Test
	void testDoubleDownOnceAndWin() {
		testGame.hitPlayer("1");
		testGame.hitPlayer("1");
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(50);
		assert(testGame.playerCanDoubleDown());
		testGame.doubleDown("ACE");
		assert(testGame.getPlayerBet() == 100);
		assert(testGame.getPlayerTotal() == 13);
		assert(!testGame.playerCanDoubleDown());
		testGame.hitDealer("ACE");
		testGame.hitDealer("ACE");
		assert(testGame.isPlayerWinning());
	}
	
	@Test
	void testPush() {
		testGame.hitPlayer("1");
		testGame.hitPlayer("16");
		testGame.hitDealer("ACE");
		testGame.hitDealer("16");
		assert(testGame.getPlayerTotal() == testGame.getDealerTotal());
		assert(testGame.isDealerStanding());
		testGame.setPlayerStanding(true);
		assert(testGame.isPlayerStanding());
		assert(!testGame.isPlayerBust());
		assert(!testGame.isPlayerWinning());
		assert(testGame.isGamePush());
	}
	
	@Test
	void testBust() {
		testGame.hitPlayer("KING");
		testGame.hitPlayer("KING");
		testGame.hitDealer("KING");
		testGame.hitDealer("KING");
		testGame.hitPlayer("KING");
		testGame.hitDealer("KING");
		assert(testGame.isDealerBust());
		assert(testGame.isPlayerBust());
	}
	
	@Test
	void testConcluded() {
		testGame.hitPlayer("KING");
		testGame.hitPlayer("KING");
		testGame.hitPlayer("1");
		testGame.hitDealer("6");
		testGame.hitDealer("KING");
		assert(!testGame.isDealerStanding());
		testGame.hitDealer("KING");
		assert(testGame.isDealerBust());
		assert(!testGame.isPlayerBust());
		assert(testGame.playerHasBlackJack());
		assert(testGame.isGameConcluded());
		assert(testGame.hasPlayerWon());
	}
	
	
	@Test
	void testLogical() {
		testGame.setPlayerBet(50);
		testGame.setPlayerChips(100);
		testGame.hitPlayer("KING");
		testGame.hitPlayer("KING");
		testGame.hitDealer("1");
		testGame.hitDealer("5");
		assert(testGame.playerCanDoubleDown());
		assert(!testGame.playerHasBlackJack());
		testGame.doubleDown("ACE");
		assert(testGame.playerHasBlackJack());
		assert(testGame.isPlayerStanding());
		assert(!testGame.isPlayersTurn());
		testGame.hitDealer("KING");
		System.out.println(testGame.getDealerTotal());
		assert(!testGame.isDealerStanding());
		testGame.hitDealer("KING");
		System.out.println(testGame.getDealerTotal());
		assert(testGame.isDealerStanding());
		assert(testGame.isDealerBust());
		assert(!testGame.isPlayerBust());
		assert(testGame.isGameConcluded());
		assert(testGame.hasPlayerWon());
		System.out.println(testGame.getGameState());
		assert( testGame.isPlayerWinning() && testGame.isDealerStanding());
		assert(testGame.gameState() == 1);
		assert(testGame.payOut() == testGame.getPlayerBet());
	}
	
	
	

}
