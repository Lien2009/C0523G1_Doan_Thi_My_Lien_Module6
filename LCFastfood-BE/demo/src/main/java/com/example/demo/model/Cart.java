package com.example.demo.model;

import javax.persistence.*;

import lombok.*;

@Getter
@Setter
@Builder // best build object
@AllArgsConstructor
@NoArgsConstructor
@Entity(name = "cart")
public class Cart {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column(name = "quantity")
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "product_id", referencedColumnName = "id")
    private Product product;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User user;
}
