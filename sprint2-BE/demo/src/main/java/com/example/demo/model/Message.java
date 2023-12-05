package com.example.demo.model;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
@NoArgsConstructor
@Table(name = "messages")
public class Message {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "content", columnDefinition = "longtext")
    private String content;
    @Column(name = "mess_date", columnDefinition = "datetime")
    private String messDate;
    @ManyToOne
    @JoinColumn(name = "admin_id", referencedColumnName = "id")
    private User adminId;
    @ManyToOne
    @JoinColumn(name = "user_id", referencedColumnName = "id")
    private User userId;
    @Column(columnDefinition = "boolean default false")
    boolean isDeleted;
}
