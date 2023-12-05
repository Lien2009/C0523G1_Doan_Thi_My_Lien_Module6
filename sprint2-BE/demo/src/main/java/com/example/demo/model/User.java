package com.example.demo.model;


import com.fasterxml.jackson.annotation.JsonBackReference;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "user_name",columnDefinition = "varchar(255)",unique = true)
    private String userName;
    @Column(name = "password",columnDefinition = "varchar(255)")
    private String password;
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;
    @JsonBackReference
    @OneToMany(mappedBy = "user")
    private Set<UserRole> userRoles;
}
