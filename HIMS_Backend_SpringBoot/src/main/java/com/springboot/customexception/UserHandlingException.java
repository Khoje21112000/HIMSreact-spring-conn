package com.springboot.customexception;

public class UserHandlingException extends RuntimeException{
	
	public UserHandlingException(String msg) {
		super(msg);
	}

}
