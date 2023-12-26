package com.example.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "customers")
public class Customer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    @Column(name = "birthday", columnDefinition = "date")
    private String birthday;
    private String address;
    private String phone;
    private String email;
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;
    @OneToOne
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private User user;
}
