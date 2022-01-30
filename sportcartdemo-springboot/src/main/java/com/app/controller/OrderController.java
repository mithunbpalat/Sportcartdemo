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

import com.app.model.Order;
import com.app.service.OrderService;

@RestController
@CrossOrigin("*")
public class OrderController {
	@Autowired
	private OrderService orderServ;
	
	@PostMapping(value="postorder")
	public List<Order> saveOrder(@RequestBody Order order){
		System.out.println("Order works");
		orderServ.saveOrder(order);
		return orderServ.getAllOrders();
	}
	@PostMapping(value="postorderone")
	public List<Order> saveOrderone(@RequestBody Order order){
		System.out.println("Order works");
		orderServ.saveOrder(order);
		String username = order.getUsername();
		return orderServ.getOrderByUsername(username);
	}
	@PutMapping(value="updateorder")
	public List<Order> updateOrder(@RequestBody Order order){
		System.out.println("Order update works");
		orderServ.updateOrder(order);
		return orderServ.getAllOrders();
	}
	@GetMapping(value="getallorders")
	public List<Order> getAllOrder(){
		return orderServ.getAllOrders();
	}
	@GetMapping(value="getordersbyusername")
	public List<Order> getOrders(@RequestParam String username){
		return orderServ.getOrderByUsername(username);
	}
	@DeleteMapping(value="deleteorderbyid")
	public List<Order> deleteOrder(@RequestParam int oid){
		orderServ.deleteOrder(oid);
		return orderServ.getAllOrders();
	}
	@GetMapping(value="getorderbyid")
	public Order getOrderById(@RequestParam int oid){
		return orderServ.findOrderByOid(oid);
	}
}
