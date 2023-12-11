package com.example.demo.service;

import com.example.demo.dto.BestSellerDto;
import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<ProductDto> getAll(Pageable pageable, String name);
    Page<ProductDto> getProductByCategory(Pageable pageable, String name, String categoryId);
    List<BestSellerDto> findBestSeller();
    Product findById(int id);
    Product findProductInCart(int id);
}
