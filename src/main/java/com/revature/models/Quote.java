package com.revature.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "jackblackquotes")
public class Quote {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private int id;
	
	@Column(name= "quote")
	private String quote;
	
	@Column(name = "type")
	private int type; //Quotes for new games, wins, and losses
	
	
	
	public Quote(int id, String message, int type) {
		super();
		this.id = id;
		this.quote = message;
		this.type = type;
	}
	public Quote(String message, int type) {
		super();
		this.quote = message;
		this.type = type;
	}
	public Quote() {
		super();
	}
	
	@Override
	public int hashCode() { 
		final int prime = 31;
		int result = 1;
		result = prime * result + ((quote == null) ? 0 : quote.hashCode());
		result = prime * result + type;
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
		Quote other = (Quote) obj;
		if (quote == null) {
			if (other.quote != null)
				return false;
		} else if (!quote.equals(other.quote))
			return false;
		if (type != other.type)
			return false;
		return true;
	}
	@Override
	public String toString() {
		return "Quote [message=" + quote + ", type=" + type + "]";
	}
	public String getMessage() {
		return quote;
	}
	public void setMessage(String message) {
		this.quote = message;
	}
	public int getType() {
		return type;
	}
	public void setType(int type) {
		this.type = type;
	}
	
	
}
