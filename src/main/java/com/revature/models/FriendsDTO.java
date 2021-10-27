package com.revature.models;

public class FriendsDTO {
	
	private String jwt;
	private String adding;
	
	public FriendsDTO(String jwt, String adding) {
		super();
		this.jwt = jwt;
		this.adding = adding;
	}

	public FriendsDTO() {
		super();
	}

	public String getJwt() {
		return jwt;
	}

	public void setJwt(String jwt) {
		this.jwt = jwt;
	}

	public String getAdding() {
		return adding;
	}

	public void setAdding(String adding) {
		this.adding = adding;
	}
	
	
}
