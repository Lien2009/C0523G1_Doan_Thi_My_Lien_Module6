package com.example.demo.service;

import com.example.demo.dto.CartDto;
import com.example.demo.model.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IOrderService {
    Page<CartDto> getCart(Pageable pageable, int userId);
    void addCart(Cart cart);
}
