package com.revature.daos;

import java.util.List;
import java.util.Random;

//import org.apache.logging.log4j.LogManager;
//import org.apache.logging.log4j.Logger;
import org.hibernate.Session;

import com.revature.models.Quote;
import com.revature.utils.HibernateUtil;

public class QuoteDAO implements QuoteDAOInterface {
	
//	Logger log = LogManager.getLogger(QuoteDAO.class);
	
	@SuppressWarnings("unchecked")
	@Override
	public Quote getQuote(int type) {
		
		Session ses = HibernateUtil.getSession();
		List<Quote> quoteList = ses.createQuery("FROM com.revature.models.Quote WHERE type='" + type + "'").list();
		
		Random rand = new Random();
		int randomInt = rand.nextInt(quoteList.size()-1);
		
		Quote quote = quoteList.get(randomInt);
		HibernateUtil.closeSession();
		
		//log.info("Quote retrieved from database");
		
		return quote;
	}
}
