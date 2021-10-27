package com.revature.utils;

import java.util.Base64;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.Claim;
import com.auth0.jwt.interfaces.DecodedJWT;

public class JWTUtil {
	
    private static final String secret ="Jack Black is invited to our presentation";
    private static final Algorithm algorithm = Algorithm.HMAC256(secret);

  
    public static String generate(String username, String password){

        // builder design pattern
        String token = JWT.create()
                .withClaim("username", username) 
                .withClaim("password", password) 
                .sign(algorithm); 

        return  token;
    }

    public static DecodedJWT isValidJWT(String token){
            DecodedJWT jwt = JWT.require(algorithm).build().verify(token);
            return  jwt;
    }
    
    public static String decode(String token) {
    
    	
    	Base64.Decoder decoder = Base64.getDecoder();

    	String[] chunks = token.split("\\.");
    	String payload = new String(decoder.decode(chunks[1]));
    	
    	String[] chonky = payload.split("\\:");
    	
    	String randomVariableName = chonky[2];
    	
    	String username = randomVariableName.substring(1, (randomVariableName.length()-2));
    	
    	return username;
    }
}
