package com.revature.services;

import com.revature.daos.QuoteDAO;
import com.revature.models.Quote;

public class QuoteService {
	
	QuoteDAO QDAO = new QuoteDAO();
	
	public String randomQuote(int type) {
		Quote quote = QDAO.getQuote(type);
		String message = quote.getMessage();
				return message;
	}
}
