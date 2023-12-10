package com.example.demo.service;

import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<ProductDto> getAll(Pageable pageable, String name) {
        return productRepository.findAll(pageable, "%" + name + "%");
    }

    @Override
    public Page<ProductDto> getProductByCategory(Pageable pageable, String name, String categoryId) {
        return productRepository.findProductByCate(pageable,"%" + name + "%", "%" + categoryId + "%");
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id).get();
    }

    @Override
    public Product findProductInCart(int id) {
        return productRepository.findProductInCart(id);
    }
}
