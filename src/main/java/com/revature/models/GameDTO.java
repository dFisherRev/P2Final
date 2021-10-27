package com.revature.models;

import java.util.Arrays;

public class GameDTO {

	private String JWTtoken;
	private int bet;
	private String deck_id;
	private Card[] playerHand;
	private Card[] dealerHand;
	public GameDTO() {
		super();
		// TODO Auto-generated constructor stub
	}
	public GameDTO(String jWTtoken, int bet, String deck_id, Card[] playerHand, Card[] dealerHand) {
		super();
		JWTtoken = jWTtoken;
		this.bet = bet;
		this.deck_id = deck_id;
		this.playerHand = playerHand;
		this.dealerHand = dealerHand;
	}
	public GameDTO(String jWTtoken, String deck_id, Card[] playerHand, Card[] dealerHand) {
		super();
		JWTtoken = jWTtoken;
		this.deck_id = deck_id;
		this.playerHand = playerHand;
		this.dealerHand = dealerHand;
	}
	public GameDTO(String jWTtoken, String deck_id, Card[] playerHand) {
		super();
		JWTtoken = jWTtoken;
		this.deck_id = deck_id;
		this.playerHand = playerHand;
	}
	public GameDTO(String jWTtoken, String deck_id) {
		super();
		JWTtoken = jWTtoken;
		this.deck_id = deck_id;
	}
	public String getJWTtoken() {
		return JWTtoken;
	}
	public void setJWTtoken(String jWTtoken) {
		JWTtoken = jWTtoken;
	}
	public int getBet() {
		return bet;
	}
	public void setBet(int bet) {
		this.bet = bet;
	}
	public String getDeck_id() {
		return deck_id;
	}
	public void setDeck_id(String deck_id) {
		this.deck_id = deck_id;
	}
	public Card[] getPlayerHand() {
		return playerHand;
	}
	public void setPlayerHand(Card[] playerHand) {
		this.playerHand = playerHand;
	}
	public Card[] getDealerHand() {
		return dealerHand;
	}
	public void setDealerHand(Card[] dealerHand) {
		this.dealerHand = dealerHand;
	}
	
	
	

	
}