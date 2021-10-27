package com.revature.models;

public class ChipDTO {
	
	private String jwt;
	private String reciepient;
	private int chips;
	
	public ChipDTO(String jwt, String reciepient, int chips) {
		super();
		this.jwt = jwt;
		this.reciepient = reciepient;
		this.chips = chips;
	}

	public ChipDTO() {
		super();
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getReciepient() {
		return reciepient;
	}

	public void setReciepient(String reciepient) {
		this.reciepient = reciepient;
	}

	public int getChips() {
		return chips;
	}

	public void setChips(int chips) {
		this.chips = chips;
	}
	
	
}
