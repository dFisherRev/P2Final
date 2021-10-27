package com.revature;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;

import org.hibernate.Session;

import com.revature.models.Quote;
import com.revature.utils.HibernateUtil;

import com.revature.daos.QuoteDAO;

public class QuoteDAOTest {
	QuoteDAO QDAO;
	int a=1;
	
	@BeforeEach
	void setUp() {
		QDAO = new QuoteDAO();
	}
	
	@Test
	@DisplayName("Attempt to retrieve a quote of type a")
	void testGetQuote() {
		System.out.println(QDAO.getQuote(a));
		assertNotNull(QDAO.getQuote(a), "Quote not found");
	}
}
