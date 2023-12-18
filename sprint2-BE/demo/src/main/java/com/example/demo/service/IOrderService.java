package com.example.demo.service;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
import com.example.demo.dto.OrderDetailDto;
import com.example.demo.dto.OrderDto;
import com.example.demo.dto.ResponseContentDto;
import com.example.demo.model.Cart;
import com.example.demo.model.Order;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.http.ResponseEntity;

import java.util.List;
import java.util.Set;

public interface IOrderService {
    List<CartDto> getCart(int userId);

    void addCart(Cart cart);

    ResponseContentDto updateCart(int userId, Set<CartCommand.CartPutUpdateCommand> cartsCommand);

    ResponseContentDto deleteCartById(int userId, int cartId);

    ResponseContentDto addProductToCart(int userId, int productId);
    void addOrder(int new_id_account, int new_total_price, int new_payment_status);
    List<OrderDto> getAllOrder(int userId);
    List<OrderDetailDto> getOrderDetail(int orderId);

}
