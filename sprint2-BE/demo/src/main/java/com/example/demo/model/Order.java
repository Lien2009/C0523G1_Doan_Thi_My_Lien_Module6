package com.example.demo.model;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
    @Column(name = "order_date", columnDefinition = "datetime")
    private String orderDate;
    private String address;
    private String phone;
    private String name;
    private int totalPrice;
    private int paymentStatus;
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;
}
