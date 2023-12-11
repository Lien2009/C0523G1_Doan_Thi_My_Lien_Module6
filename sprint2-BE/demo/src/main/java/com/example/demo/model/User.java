package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.*;

import javax.persistence.*;
import java.util.Set;

@Entity(name = "users")
@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Basic
    @Column(name = "user_name",columnDefinition = "varchar(255)",unique = true)
    private String userName;

    @Basic
    @Column(name = "password",columnDefinition = "varchar(255)")
    private String password;

    @Basic
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;


    @JsonBackReference
    @OneToMany(mappedBy = "user")
    private Set<UserRole> userRoles;

    @JsonBackReference
    @OneToMany(mappedBy = "user", fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Set<Cart> carts;
}
