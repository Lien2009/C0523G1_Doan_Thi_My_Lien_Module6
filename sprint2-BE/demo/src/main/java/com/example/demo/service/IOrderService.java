package com.example.demo.service;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
import com.example.demo.dto.ResponseContentDto;
import com.example.demo.model.Cart;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IOrderService {
    Page<CartDto> getCart(Pageable pageable, int userId);

    void addCart(Cart cart);

    ResponseContentDto updateCart(int userId, Set<CartCommand.CartPutUpdateCommand> cartsCommand);

    ResponseContentDto deleteCartById(int userId, int cartId);

    ResponseContentDto addProductToCart(int userId, int productId);
}
