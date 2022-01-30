package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.FeedbackRepository;
import com.app.model.Feedback;

@Service
public class FeedbackService {
	@Autowired
	private FeedbackRepository feedbackRepo;
	public Feedback saveFeedback(Feedback feedback) {
		return feedbackRepo.save(feedback);
	}
	public Feedback updateFeedback(Feedback feedback) {
		return feedbackRepo.save(feedback);
	}
	public List<Feedback> getAllFeedbacks() {
		return (List<Feedback>) feedbackRepo.findAll();
	}
	public void deleteFeedback(int fid) {
		feedbackRepo.deleteById(fid);
	}
	public Feedback findFeedbackByFid(int fid) {
		return feedbackRepo.findById(fid).get();
	}
}
