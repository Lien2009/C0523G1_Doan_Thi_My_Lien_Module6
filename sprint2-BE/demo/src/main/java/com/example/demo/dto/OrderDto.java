package com.example.demo.dto;

import com.example.demo.model.User;
import sun.security.timestamp.TSRequest;

import javax.persistence.Column;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

public interface OrderDto {
    int getId();
    int getUserId();
    String getOrderDate();
    String getAddress();
    String getPhone();
    String getName();
    int getTotalPrice();
    int getPaymentStatus();
    boolean getIsDeleted();
}
