package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.OrderRepository;
import com.app.model.Order;

@Service
public class OrderService {
	@Autowired
	private OrderRepository orderRepo;
	public Order saveOrder(Order order) {
		return orderRepo.save(order);
	}
	public Order updateOrder(Order order) {
		return orderRepo.save(order);
	}
	public List<Order> getAllOrders() {
		return (List<Order>) orderRepo.findAll();
	}
	public void deleteOrder(int oid) {
		orderRepo.deleteById(oid);
	}
	public Order findOrderByOid(int oid) {
		return orderRepo.findById(oid).get();
	}
	public List<Order> getOrderByUsername(String username) {
		return (List<Order>) orderRepo.findByUsername(username);
	}
}
