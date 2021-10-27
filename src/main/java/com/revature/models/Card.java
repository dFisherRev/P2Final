package com.revature.models;

import java.util.Arrays;

public class Card {

	private String code;
    private String image;
    private DaCardObject images;
    private String value;
    private String suit;
    
	public Card(String code, String image, DaCardObject images, String value, String suit) {
		super();
		this.code = code;
		this.image = image;
		this.images = images;
		this.value = value;
		this.suit = suit;
	}

	public Card() {
		super();
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public DaCardObject getImages() {
		return images;
	}

	public void setImages(DaCardObject images) {
		this.images = images;
	}

	public String getValue() {
		return value;
	}

	public void setValue(String value) {
		this.value = value;
	}

	public String getSuit() {
		return suit;
	}

	public void setSuit(String suit) {
		this.suit = suit;
	}
    
	
    
    
	
	
}
