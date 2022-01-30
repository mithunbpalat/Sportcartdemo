package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.model.Feedback;
import com.app.service.FeedbackService;

@RestController
@CrossOrigin("*")
public class FeedbackController {
	@Autowired
	private FeedbackService feedbackServ;
	
	@PostMapping(value="postfeedback")
	public String saveFeedback(@RequestBody Feedback feedback){
		System.out.println("Feedback works");
		feedbackServ.saveFeedback(feedback);
		return "Feedback Saved";
	}
	@PutMapping(value="updatefeedback")
	public List<Feedback> updateFeedback(@RequestBody Feedback feedback){
		System.out.println("Feedback update works");
		feedbackServ.updateFeedback(feedback);
		return feedbackServ.getAllFeedbacks();
	}
	@GetMapping(value="getallfeedbacks")
	public List<Feedback> getAllFeedback(){
		return feedbackServ.getAllFeedbacks();
	}
	@DeleteMapping(value="deletefeedbackbyid")
	public List<Feedback> deleteFeedback(@RequestParam int fid){
		feedbackServ.deleteFeedback(fid);
		return feedbackServ.getAllFeedbacks();
	}
	@GetMapping(value="getfeedbackbyid")
	public Feedback getFeedbackById(@RequestParam int fid){
		return feedbackServ.findFeedbackByFid(fid);
	}
}
