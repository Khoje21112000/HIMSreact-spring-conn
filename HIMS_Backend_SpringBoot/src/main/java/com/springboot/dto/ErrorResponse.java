package com.springboot.dto;

import java.time.LocalDateTime;

public class ErrorResponse {
	private String msg;
	private String ErrorDetails;
	private LocalDateTime timestamp;
	
	public ErrorResponse(String mesg,String ErrorDetails) {
		
		this.msg=msg;
		this.ErrorDetails=ErrorDetails;
	}
	

}
