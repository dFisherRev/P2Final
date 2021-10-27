package com.revature;

import java.util.Base64;

import java.util.ArrayList;

import org.junit.Test;
import org.junit.jupiter.api.DisplayName;

import com.revature.utils.JWTUtil;

public class JWTUtilTest {
	
	String username="szdfgsdaghargih";
	String password="password";
	JWTUtil jwt = new JWTUtil();
	
	@Test
	@DisplayName("Attempt to generate and decode a JWT")
	public void JWTTest() {
		String s = JWTUtil.generate(username, password);
		System.out.println(s);
		
		String returnedUsername = JWTUtil.decode(s);
		System.out.println(returnedUsername);
		String[] chunks = returnedUsername.split("\\:");
		String chonky = chunks[2];
		System.out.println(chonky);
		
		String username = chonky.substring(1, (chonky.length()-2));
		System.out.println(username);
		
		
		
	}
	
}
