package com.revature;

import static org.junit.jupiter.api.Assertions.assertNotNull;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import com.revature.utils.HibernateUtil;

public class HibernateUtilTest {
	@Test
	@DisplayName("Attempt to start a session")
	public void testHibernate() {
		assertNotNull(HibernateUtil.getSession());
	}
}
