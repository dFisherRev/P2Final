package com.revature.controllers;

import io.javalin.http.Handler;

public class CardController {

	public Handler getActiveTicketsHandler = (ctx) -> {
		
		if(ctx.req.getSession(false) != null) {
			
			List<Ticket> activeTickets = TS.getActiveTickets();
			
			Gson gson = new Gson();
		
			String JSONCards = gson.toJson(activeTickets); 
		
			ctx.result(JSONTickets); 
		
			ctx.status(200); 
		}
		
		else {
			ctx.status(403); 
		}
	};
	
	
}
