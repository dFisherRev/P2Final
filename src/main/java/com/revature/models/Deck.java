package com.revature.models;

import java.util.Arrays;

public class Deck {
    boolean success;
    String deck_id;
    Card[] cards;
    
    public Card[] getCards() {
    	return cards;
    }
    
    
    
	@Override
	public String toString() {
		return "Deck [success=" + success + ", deck_id=" + deck_id + ", cards=" + Arrays.toString(cards) + "]";
	}



	public String getDeck_id() {
		return deck_id;
	}



	public void setDeck_id(String deck_id) {
		this.deck_id = deck_id;
	}
    
    
    
    
}
