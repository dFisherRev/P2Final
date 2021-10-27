package com.revature.models;

import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Calendar;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
	
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	@Column(name = "user_id")
	private int ID; 
	
	@Column(name = "name")
	private String name;
	
	@Column(name = "registration_timestamp")
	private Timestamp registered;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	private String address;
	private String city;
	private String state;
	private String zipcode;
	
	private ArrayList<String> friends = new ArrayList<String>();
	
	@Column(name = "credit_card_number")
	private String cardnumber;
	
	@Column(name = "expiration_date")
	private String expirationdate;
	
	@Column(name = "security_code")
	private String securitycode;
	
	@Column(name = "birthday")
	private String DOB;
	
	@Column(name = "email")
	private String email;
	
	@Column(name = "chipcount")
	private int chipCount;

	
	
	
	public User(int iD, String name, Timestamp registered, String username, String password, String address,
			String city, String state, String zipcode, ArrayList<String> friends, String cardnumber,
			String expirationdate, String securitycode, String dOB, String email, int chipCount) {
		super();
		ID = iD;
		this.name = name;
		this.registered = registered;
		this.username = username;
		this.password = password;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.friends = friends;
		this.cardnumber = cardnumber;
		this.expirationdate = expirationdate;
		this.securitycode = securitycode;
		DOB = dOB;
		this.email = email;
		this.chipCount = chipCount;
	}

	public User(String name, Timestamp registered, String username, String password, String address, String city,
			String state, String zipcode, ArrayList<String> friends, String cardnumber, String expirationdate,
			String securitycode, String dOB, String email, int chipCount) {
		super();
		this.name = name;
		this.registered = registered;
		this.username = username;
		this.password = password;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.friends = friends;
		this.cardnumber = cardnumber;
		this.expirationdate = expirationdate;
		this.securitycode = securitycode;
		DOB = dOB;
		this.email = email;
		this.chipCount = chipCount;
	}

	public User(String name, String username, String password, String address, String city, String state,
			String zipcode, String cardnumber, String expirationdate, String securitycode, String dOB) {
		super();
		this.name = name;
		this.username = username;
		this.password = password;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipcode = zipcode;
		this.cardnumber = cardnumber;
		this.expirationdate = expirationdate;
		this.securitycode = securitycode;
		DOB = dOB;
	}

	public User() {
		super();
	}

	public User(String iD, String username, String password) {
		super();
		this.username = username;
		this.password = password;
	}

	

	public User(String name, String username, int chipCount) {
		super();
		this.name = name;
		this.username = username;
		this.chipCount = chipCount;
	}

	public User(int iD, String name, String username, int chipCount) {
		super();
		ID = iD;
		this.name = name;
		this.username = username;
		this.chipCount = chipCount;
	}

	@Override
	public String toString() {
		return "User [ID=" + ID + ", name=" + name + ", registered=" + registered + ", username=" + username
				+ ", password=" + password + ", address=" + address + ", city=" + city + ", state=" + state
				+ ", zipcode=" + zipcode + ", friends=" + friends + ", cardnumber=" + cardnumber + ", expirationdate="
				+ expirationdate + ", securitycode=" + securitycode + ", DOB=" + DOB + ", email=" + email
				+ ", chipCount=" + chipCount + "]";
	}

	public int getID() {
		return ID;
	}

	public void setID(int iD) {
		ID = iD;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Timestamp getRegistered() {
		return registered;
	}

	public void setRegistered(Timestamp registered) {
		this.registered = registered;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipcode() {
		return zipcode;
	}

	public void setZipcode(String zipcode) {
		this.zipcode = zipcode;
	}

	public ArrayList<String> getFriends() {
		return friends;
	}

	public void setFriends(ArrayList<String> friends) {
		this.friends = friends;
	}

	public String getCardnumber() {
		return cardnumber;
	}

	public void setCardnumber(String cardnumber) {
		this.cardnumber = cardnumber;
	}

	public String getExpirationdate() {
		return expirationdate;
	}

	public void setExpirationdate(String expirationdate) {
		this.expirationdate = expirationdate;
	}

	public String getSecuritycode() {
		return securitycode;
	}

	public void setSecuritycode(String securitycode) {
		this.securitycode = securitycode;
	}

	public String getDOB() {
		return DOB;
	}

	public void setDOB(String dOB) {
		DOB = dOB;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public int getChipCount() {
		return chipCount;
	}

	public void setChipCount(int chipCount) {
		this.chipCount = chipCount;
	}

	
}
