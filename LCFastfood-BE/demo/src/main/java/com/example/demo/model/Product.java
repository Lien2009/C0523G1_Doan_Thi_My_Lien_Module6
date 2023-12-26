package com.example.demo.model;

import javax.persistence.*;

import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity(name = "products")
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column(name = "name")
    private String name;

    @Basic
    @Column(name = "price")
    private int price;

    @Basic
    @Column(name = "image", columnDefinition = "longtext")
    private String image;

    @Basic
    @Column(name = "description", columnDefinition = "longtext")
    private String description;

    @Basic
    @Column(name = "quantity")
    private int quantity;

    @ManyToOne
    @JoinColumn(name = "category_id",referencedColumnName = "id")
    private Category category;

    @Basic
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;
}
