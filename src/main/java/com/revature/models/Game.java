package com.revature.models;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "gamesession")
public class Game {

	//Game fields
	@Id
	@Column(name = "game_id")
	private String id;
	
	private int gameState; //0-Ongoing, 1-Player wins, 2-Player loses by busting, 3-Dealer has a higher total than player, 4-Push
	
	
	private boolean isGameStarted;
	private boolean isPlayersTurn; //1-Player, 0-Dealer
	private boolean isGamePush;
	private boolean isGameConcluded;
	
	
	//Player fields
	private int playerBet;

	private int playerTotal;
	public boolean playerCanDoubleDown;
	public boolean playerHasDoubledDown;
	public boolean playerHasBlackJack;
	private boolean playerHasWon;
	private boolean isPlayerStanding;
	private boolean isPlayerBust;
	private boolean isPlayerWinning;
	private ArrayList<String> playerHand = new ArrayList<String>();
	
	
	//Dealer fields
	private int dealerTotal;
	private boolean isDealerBust;
	private boolean isDealerStanding;
	private ArrayList<String> dealerHand = new ArrayList<String>();
	
	

	
	
	
	
	
	
	
	//returns the value of a hand adjusted for aces
	public int getHandValue(ArrayList<String> hand) {
		if (hand.isEmpty()) {
			return 0;
		}
		
		int sum = 0;
		int aceCount = 0;
		
		for(String card : hand) {
			if (card.equals("KING")) {
				sum += 10;
			}
			else if (card.equals("QUEEN")) {
				sum += 10;
			}
			else if (card.equals("JACK")) {
				sum += 10;
			}
			else if (card.equals("ACE")) {
				aceCount++;
				sum += 11;
			}
			else {
				sum += Integer.parseInt(card);
			}
		}
		//Decrease sum by 10 up to aceCount times while sum is greater than 21
		for (int i = aceCount; i > 0; i--) {
			if (sum > 21) {
				sum -=10;
			}
		}
		
		
		return sum;
	}		
	
	//Game has concluded, player hasn't busted, game isn't push, player has higher score or dealer busted
	public boolean hasPlayerWon() {
		this.playerHasWon = 
				((this.isGameConcluded()) &&
				(!this.isPlayerBust())    &&
				(!this.isGamePush())	     &&
				(this.isPlayerWinning())  );
		
//		System.out.println("IsGameConcluded: " + isGameConcluded() + 
//						   " !isPlayerBust: " + !isPlayerBust() +
//						   " !isGamePush: " + !isGamePush() +
//						   " isPlayerWinning: " + isPlayerWinning());
		return this.playerHasWon;
	}
	
	public boolean isGameConcluded() {
		return (this.isDealerBust() ||
				this.isPlayerBust() ||
				this.isPlayerStanding() );
	}
	
	
	//If the player and dealer both stand without busting check if their hands are equal
	public boolean isGamePush() { 
		if (this.isPlayerStanding && this.isDealerStanding) {
			this.isGamePush = (this.playerTotal == this.dealerTotal);
		}
		return this.isGamePush;
		
	}
	
	//checks if player has higher score and isn't bust, or if dealer has busted and player hasn't
	public boolean isPlayerWinning() {
		this.isPlayerWinning = false;
		if ( (this.playerTotal > this.dealerTotal) && 
			(!isPlayerBust() )) {
			this.isPlayerWinning = true;
		}
		if (isDealerBust() && 
			!isPlayerBust()) {
			this.isPlayerWinning = true;
		}
		return this.isPlayerWinning;
	}
	
	//0-Ongoing, 1-Player wins, 2-Player loses by busting, 3-Dealer has a higher total than player, 4-Push
	
	public int gameState() {
		
		if (this.isPlayerBust()) {
			return 2;
		}
		
		if (this.isGamePush() ){
			return 4;
		}
		
		if ((this.dealerTotal > this.playerTotal) && this.isPlayerStanding && (!this.isDealerBust())) {
			return 3;
		}
		
		if (this.isPlayerWinning() ) {
			if (this.isDealerStanding()) {
				return  1;
			}
		}
		return 0;
		
	}
	
	private void gameEnd() { 
		//Don't worry about this one for now Peter
		//Eventually this is gonna have all the logic for ending the game and starting a new one
	}
	
	//PLAYER LOGIC
	
	//Add a card to players hand, adjust player total
	public void hitPlayer(String newCard) {
		this.playerHand.add(newCard);
		this.playerTotal = this.getHandValue(this.playerHand);
		this.isPlayerBust();
	}
	
	//End players turn
	public void stand() {
		this.isPlayerStanding = true;
	}

	//Set betting amount
	private void bet(int bet) {
		this.playerBet = bet;
	}
	
	public boolean isPlayerBust() {
		this.isPlayerBust = (this.playerTotal > 21);
		return this.isPlayerBust;
	}

	public boolean playerHasBlackJack() {
		this.playerHasBlackJack = (this.playerTotal == 21);
		return this.playerHasBlackJack;
	}
	
	
	
	
	
	//DEALER LOGIC

	public void hitDealer(String newCard) {
		this.dealerHand.add(newCard);
		this.dealerTotal = getHandValue(dealerHand);
		this.isDealerStanding();
		this.isDealerBust();
		
	}
	
	public boolean isDealerBust() {
		this.isDealerBust = (dealerTotal > 21);
		return this.isDealerBust;
	}
	
	private boolean isDealer21() {
		return (this.dealerTotal == 21);
	}
	
	public boolean isDealerStanding() {
		this.isDealerStanding = (this.dealerTotal > 16);
		//System.out.println("dealer total: " + dealerTotal);
		return this.isDealerStanding;
	}


	


	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public int getGameState() {
		return gameState;
	}

	public void setGameState(int gameState) {
		this.gameState = gameState;
	}

	public boolean isGameStarted() {
		return isGameStarted;
	}

	public void setGameStarted(boolean isGameStarted) {
		this.isGameStarted = isGameStarted;
	}

	public boolean isPlayersTurn() {
		return isPlayersTurn;
	}

	public void setPlayersTurn(boolean isPlayersTurn) {
		this.isPlayersTurn = isPlayersTurn;
	}

	public int getPlayerBet() {
		return playerBet;
	}

	public void setPlayerBet(int playerBet) {
		this.playerBet = playerBet;
	}

	public int getPlayerTotal() {
		return playerTotal;
	}

	public void setPlayerTotal(int playerTotal) {
		this.playerTotal = playerTotal;
	}

	public boolean isPlayerCanDoubleDown() {
		return playerCanDoubleDown;
	}

	public void setPlayerCanDoubleDown(boolean playerCanDoubleDown) {
		this.playerCanDoubleDown = playerCanDoubleDown;
	}

	public boolean isPlayerHasDoubledDown() {
		return playerHasDoubledDown;
	}

	public void setPlayerHasDoubledDown(boolean playerHasDoubledDown) {
		this.playerHasDoubledDown = playerHasDoubledDown;
	}

	public boolean isPlayerHasBlackJack() {
		return playerHasBlackJack;
	}

	public void setPlayerHasBlackJack(boolean playerHasBlackJack) {
		this.playerHasBlackJack = playerHasBlackJack;
	}

	public boolean isPlayerHasWon() {
		return playerHasWon;
	}

	public void setPlayerHasWon(boolean playerHasWon) {
		this.playerHasWon = playerHasWon;
	}

	public boolean isPlayerStanding() {
		return isPlayerStanding;
	}

	public void setPlayerStanding(boolean isPlayerStanding) {
		this.isPlayerStanding = isPlayerStanding;
	}

	public ArrayList<String> getPlayerHand() {
		return playerHand;
	}

	public void setPlayerHand(ArrayList<String> playerHand) {
		this.playerHand = playerHand;
	}

	public int getDealerTotal() {
		return dealerTotal;
	}

	public void setDealerTotal(int dealerTotal) {
		this.dealerTotal = dealerTotal;
	}

	public ArrayList<String> getDealerHand() {
		return dealerHand;
	}

	public void setDealerHand(ArrayList<String> dealerHand) {
		this.dealerHand = dealerHand;
	}

	public void setGamePush(boolean isGamePush) {
		this.isGamePush = isGamePush;
	}

	public void setGameConcluded(boolean isGameConcluded) {
		this.isGameConcluded = isGameConcluded;
	}

	public void setPlayerBust(boolean isPlayerBust) {
		this.isPlayerBust = isPlayerBust;
	}

	public void setPlayerWinning(boolean isPlayerWinning) {
		this.isPlayerWinning = isPlayerWinning;
	}

	public void setDealerBust(boolean isDealerBust) {
		this.isDealerBust = isDealerBust;
	}

	public void setDealerStanding(boolean isDealerStanding) {
		this.isDealerStanding = isDealerStanding;
	}

	public Game() {
		super();
		// TODO Auto-generated constructor stub
	}

	
	

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((dealerHand == null) ? 0 : dealerHand.hashCode());
		result = prime * result + dealerTotal;
		result = prime * result + gameState;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + (isDealerBust ? 1231 : 1237);
		result = prime * result + (isDealerStanding ? 1231 : 1237);
		result = prime * result + (isGameConcluded ? 1231 : 1237);
		result = prime * result + (isGamePush ? 1231 : 1237);
		result = prime * result + (isGameStarted ? 1231 : 1237);
		result = prime * result + (isPlayerBust ? 1231 : 1237);
		result = prime * result + (isPlayerStanding ? 1231 : 1237);
		result = prime * result + (isPlayerWinning ? 1231 : 1237);
		result = prime * result + (isPlayersTurn ? 1231 : 1237);
		result = prime * result + playerBet;
		result = prime * result + (playerCanDoubleDown ? 1231 : 1237);
		result = prime * result + ((playerHand == null) ? 0 : playerHand.hashCode());
		result = prime * result + (playerHasBlackJack ? 1231 : 1237);
		result = prime * result + (playerHasDoubledDown ? 1231 : 1237);
		result = prime * result + (playerHasWon ? 1231 : 1237);
		result = prime * result + playerTotal;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Game other = (Game) obj;
		if (dealerHand == null) {
			if (other.dealerHand != null)
				return false;
		} else if (!dealerHand.equals(other.dealerHand))
			return false;
		if (dealerTotal != other.dealerTotal)
			return false;
		if (gameState != other.gameState)
			return false;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (isDealerBust != other.isDealerBust)
			return false;
		if (isDealerStanding != other.isDealerStanding)
			return false;
		if (isGameConcluded != other.isGameConcluded)
			return false;
		if (isGamePush != other.isGamePush)
			return false;
		if (isGameStarted != other.isGameStarted)
			return false;
		if (isPlayerBust != other.isPlayerBust)
			return false;
		if (isPlayerStanding != other.isPlayerStanding)
			return false;
		if (isPlayerWinning != other.isPlayerWinning)
			return false;
		if (isPlayersTurn != other.isPlayersTurn)
			return false;
		if (playerBet != other.playerBet)
			return false;
		if (playerCanDoubleDown != other.playerCanDoubleDown)
			return false;
		if (playerHand == null) {
			if (other.playerHand != null)
				return false;
		} else if (!playerHand.equals(other.playerHand))
			return false;
		if (playerHasBlackJack != other.playerHasBlackJack)
			return false;
		if (playerHasDoubledDown != other.playerHasDoubledDown)
			return false;
		if (playerHasWon != other.playerHasWon)
			return false;
		if (playerTotal != other.playerTotal)
			return false;
		return true;
	}

	
	@Override
	public String toString() {
		return "Game [id=" + id + ", gameState=" + gameState + ", isGameStarted=" + isGameStarted + ", isPlayersTurn="
				+ isPlayersTurn + ", isGamePush=" + isGamePush + ", isGameConcluded=" + isGameConcluded + ", playerBet="
				+ playerBet + ", playerTotal=" + playerTotal + ", playerCanDoubleDown=" + playerCanDoubleDown
				+ ", playerHasDoubledDown=" + playerHasDoubledDown + ", playerHasBlackJack=" + playerHasBlackJack
				+ ", playerHasWon=" + playerHasWon + ", isPlayerStanding=" + isPlayerStanding + ", isPlayerBust="
				+ isPlayerBust + ", isPlayerWinning=" + isPlayerWinning + ", playerHand=" + playerHand
				+ ", dealerTotal=" + dealerTotal + ", isDealerBust=" + isDealerBust + ", isDealerStanding="
				+ isDealerStanding + ", dealerHand=" + dealerHand + "]";
	}

	public Game(String id, int gameState, boolean isGameStarted, boolean isPlayersTurn, boolean isGamePush,
			boolean isGameConcluded, int playerBet, int playerTotal, boolean playerCanDoubleDown,
			boolean playerHasDoubledDown, boolean playerHasBlackJack, boolean playerHasWon, boolean isPlayerStanding,
			boolean isPlayerBust, boolean isPlayerWinning, ArrayList<String> playerHand, int dealerTotal,
			boolean isDealerBust, boolean isDealerStanding, ArrayList<String> dealerHand) {
		super();
		this.id = id;
		this.gameState = gameState;
		this.isGameStarted = isGameStarted;
		this.isPlayersTurn = isPlayersTurn;
		this.isGamePush = isGamePush;
		this.isGameConcluded = isGameConcluded;
		this.playerBet = playerBet;
		this.playerTotal = playerTotal;
		this.playerCanDoubleDown = playerCanDoubleDown;
		this.playerHasDoubledDown = playerHasDoubledDown;
		this.playerHasBlackJack = playerHasBlackJack;
		this.playerHasWon = playerHasWon;
		this.isPlayerStanding = isPlayerStanding;
		this.isPlayerBust = isPlayerBust;
		this.isPlayerWinning = isPlayerWinning;
		this.playerHand = playerHand;
		this.dealerTotal = dealerTotal;
		this.isDealerBust = isDealerBust;
		this.isDealerStanding = isDealerStanding;
		this.dealerHand = dealerHand;
	}

	public Game(int gameState, boolean isGameStarted, boolean isPlayersTurn, boolean isGamePush,
			boolean isGameConcluded, int playerBet, int playerTotal, boolean playerCanDoubleDown,
			boolean playerHasDoubledDown, boolean playerHasBlackJack, boolean playerHasWon, boolean isPlayerStanding,
			boolean isPlayerBust, boolean isPlayerWinning, ArrayList<String> playerHand, int dealerTotal,
			boolean isDealerBust, boolean isDealerStanding, ArrayList<String> dealerHand) {
		super();
		this.gameState = gameState;
		this.isGameStarted = isGameStarted;
		this.isPlayersTurn = isPlayersTurn;
		this.isGamePush = isGamePush;
		this.isGameConcluded = isGameConcluded;
		this.playerBet = playerBet;
		this.playerTotal = playerTotal;
		this.playerCanDoubleDown = playerCanDoubleDown;
		this.playerHasDoubledDown = playerHasDoubledDown;
		this.playerHasBlackJack = playerHasBlackJack;
		this.playerHasWon = playerHasWon;
		this.isPlayerStanding = isPlayerStanding;
		this.isPlayerBust = isPlayerBust;
		this.isPlayerWinning = isPlayerWinning;
		this.playerHand = playerHand;
		this.dealerTotal = dealerTotal;
		this.isDealerBust = isDealerBust;
		this.isDealerStanding = isDealerStanding;
		this.dealerHand = dealerHand;
	}

	



	
	
	
	
	
	
}