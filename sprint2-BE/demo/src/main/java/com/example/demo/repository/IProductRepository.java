package com.example.demo.repository;

import com.example.demo.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select * from products where is_deleted = 0", nativeQuery = true)
    Page<Product> findAll(Pageable pageable);
}
