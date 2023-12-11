package com.example.demo.model;


import lombok.*;

import javax.persistence.*;

@Entity(name = "orders")
@NoArgsConstructor
@AllArgsConstructor
@Data
@Builder
@Table(name = "orders")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;

    @Basic
    @Column(name = "order_date", columnDefinition = "datetime")
    private String orderDate;

    @Basic
    @Column(name = "address")
    private String address;

    @Basic
    @Column(name = "phone")
    private String phone;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "totalPrice")
    private int totalPrice;

    @Basic
    @Column(name = "paymentStatus")
    private int paymentStatus;

    @Basic
    @Column(columnDefinition = "boolean default false")
    private boolean isDeleted;
}
