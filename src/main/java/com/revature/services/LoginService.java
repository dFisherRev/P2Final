package com.revature.services;

import com.revature.daos.userDAO;
//import com.revature.models.ChipDTO;
import com.revature.models.User;
import com.revature.utils.JWTUtil;

public class LoginService {
	
	userDAO udao = new userDAO();
	
	public boolean login(String username, String password) {
		
		boolean state;																		
		User user = udao.getUserByCredentials(username);									//get user
		if(user.getUsername().equals(username)  && user.getPassword().equals(password)) {	//compare credentials
			state = true; //success			
			} else { 
			state = false;//failed
			}
		System.out.println("Succesful Log in!!");
		return state;
		//If user is banned 
	}
	
	public boolean register(User user) {
		if (udao.getUserByCredentials(user.getUsername())==null) {
			udao.addUser(user);
			return true;
		}
		else 
			return false;
	}
	
	public boolean addFriend(String adder, String reciever) {
		
		User user = udao.getUserByCredentials(adder);
		
		if (udao.getUserByCredentials(reciever)!=null) {
			user.getFriends().add(reciever);
			System.out.println(user.getFriends());
			udao.addUser(user);
			return true;
		}
		else
			return false;
	}
	
	public User getUser(String username) {
        User user = udao.getUserByCredentials(username);

        return user;
    }
	
	public void updateUser(User user) {
		udao.updateUserInfo(user);
	}
	
	public int sendChips(User user) {
		
		User sender = udao.getUserByCredentials(user.getName());
		
		if (sender.getChipCount()>=user.getChipCount()) {
			
			User recipient = udao.getUserByCredentials(user.getUsername());
			
			int senderChips = sender.getChipCount()-user.getChipCount();
			int recipientChips = recipient.getChipCount()+user.getChipCount();
			
			sender.setChipCount(senderChips);
			udao.updateUserInfo(sender);
			recipient.setChipCount(recipientChips);
			udao.updateUserInfo(recipient);
		}
		
		return sender.getChipCount();
	}
}
