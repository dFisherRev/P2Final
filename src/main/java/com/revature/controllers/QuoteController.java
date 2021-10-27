package com.revature.controllers;

import com.google.gson.Gson;
import com.revature.services.QuoteService;

import io.javalin.http.Handler;

public class QuoteController {
	
	QuoteService QS = new QuoteService();
	Gson gson = new Gson();
	
	public Handler quoteHandler = (ctx) -> {
		int type = gson.fromJson(ctx.body(), int.class);
		
		String quote = QS.randomQuote(type);
		
		String JSONQuote = gson.toJson(quote);
		
		ctx.status(200);
		ctx.result(JSONQuote);
	};
}
