package com.example.demo.repository;

import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;

public interface IOrderDetailRepository extends JpaRepository<OrderDetail, Integer> {
    void deleteAllByOrder(@Param("order") Order order);
}
