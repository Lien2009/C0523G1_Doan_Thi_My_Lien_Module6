//package com.example.demo.model;
//
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import javax.persistence.*;
//
//@Entity
//@Getter
//@Setter
//@NoArgsConstructor
//@Table(name = "feedbacks")
//public class FeedbackPoint {
//    @Id
//    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    private int id;
//    private int point;
//    @ManyToOne
//    @JoinColumn(name = "product_id",referencedColumnName = "id")
//    private Product product;
//}
