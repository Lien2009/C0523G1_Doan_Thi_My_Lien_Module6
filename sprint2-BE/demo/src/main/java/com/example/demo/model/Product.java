package com.example.demo.model;

import javax.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private int price;
    @Column(name = "image", columnDefinition = "longtext")
    private String image;
    @Column(name = "description", columnDefinition = "longtext")
    private String description;
    private int quantity;
    @ManyToOne
    @JoinColumn(name = "category_id",referencedColumnName = "id")
    private Category category;
    private int feedbackPoint;
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;

}
