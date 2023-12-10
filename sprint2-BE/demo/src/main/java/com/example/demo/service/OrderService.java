package com.example.demo.service;

import com.example.demo.dto.CartDto;
import com.example.demo.model.Cart;
import com.example.demo.repository.IOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class OrderService implements IOrderService{
    @Autowired
    private IOrderRepository orderRepository;
    @Override
    public Page<CartDto> getCart(Pageable pageable, int userId) {
        return orderRepository.getCart(pageable, userId);
    }

    @Override
    public void addCart(Cart cart) {
        orderRepository.addCart(cart);
    }
}
