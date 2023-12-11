package com.example.demo.repository;

import com.example.demo.dto.CartDto;
import com.example.demo.model.Cart;
import com.example.demo.model.Order;
import com.example.demo.model.User;
import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IOrderRepository extends JpaRepository<Order, Integer> {
    @Query(value = "select cart.product_id as productId, cart.quantity, products.name, products.image, products.description, products.price, products.quantity as productQuantity, cart.id as cartId\n" +
            "from cart join products on cart.product_id = products.id\n" +
            "join orders on cart.user_id = orders.user_id\n" +
            "where cart.user_id = :userId", nativeQuery = true)
    Page<CartDto> getCart(Pageable pageable, @Param("userId") int userId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `cart` (quantity, product_id, user_id) VALUES (:#{#cart.quantity},:#{#cart.product.id},:#{#cart.user.id})" +
            "on duplicate key update quantity = :#{#cart.quantity}", nativeQuery = true)
    void addCart(Cart cart);
}
