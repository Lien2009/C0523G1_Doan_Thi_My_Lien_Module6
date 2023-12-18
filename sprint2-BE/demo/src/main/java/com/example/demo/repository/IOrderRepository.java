package com.example.demo.repository;

import com.example.demo.dto.CartDto;
import com.example.demo.dto.OrderDetailDto;
import com.example.demo.dto.OrderDto;
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
            "where cart.user_id = :userId", nativeQuery = true)
    List<CartDto> getCart(@Param("userId") int userId);

    @Modifying
    @Transactional
    @Query(value = "INSERT INTO `cart` (quantity, product_id, user_id) VALUES (:#{#cart.quantity},:#{#cart.product.id},:#{#cart.user.id})" +
            "on duplicate key update quantity = :#{#cart.quantity}", nativeQuery = true)
    void addCart(Cart cart);

    @Modifying
    @Transactional
    @Query(value = "CALL CreateOrder(:new_id_account, :new_total_price, :new_payment_status)", nativeQuery = true)
    void addOrder(int new_id_account, int new_total_price, int new_payment_status);
    @Query(value = "select orders.id, orders.user_id as userId, orders.order_date as orderDate, orders.total_price as totalPrice\n" +
            "from orders where orders.user_id = :userId order by orders.order_date DESC", nativeQuery = true)
    List<OrderDto> getAllOrder(int userId);
    @Query(value = "select products.name, order_detail.quantity, order_detail.price, order_detail.order_id as orderId\n" +
            "from order_detail \n" +
            "join products on order_detail.product_id = products.id\n" +
            "join orders on order_detail.order_id = orders.id\n" +
            "where orders.user_id = :userId", nativeQuery = true)
    List<OrderDetailDto> getOrderDetail(int userId);

}
