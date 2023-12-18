package com.example.demo.service;

import com.example.demo.dto.BestSellerDto;
import com.example.demo.dto.DetailProduct;
import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import com.example.demo.repository.IProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService implements IProductService{
    @Autowired
    private IProductRepository productRepository;
    @Override
    public Page<ProductDto> getAll(Pageable pageable, String name) {
        return productRepository.findAll(pageable, "%" + name + "%");
    }

    @Override
    public Page<ProductDto> findAllSortByPoint(Pageable pageable, String name) {
        return productRepository.findAllSortByPoint(pageable, "%" + name + "%");
    }

    @Override
    public Page<ProductDto> getProductByCategory(Pageable pageable, String name, String categoryId) {
        return productRepository.findProductByCate(pageable,"%" + name + "%", "%" + categoryId + "%");
    }

    @Override
    public Page<ProductDto> getProductByCategorySortByPoint(Pageable pageable, String name, String categoryId) {
        return productRepository.findProductByCateSortByPoint(pageable,"%" + name + "%", "%" + categoryId + "%");
    }

    @Override
    public List<BestSellerDto> findBestSeller() {
        return productRepository.findBestSeller();
    }

    @Override
    public Product findById(int id) {
        return productRepository.findById(id).get();
    }

    @Override
    public DetailProduct findProductDtoById(int id) {
        return productRepository.findProductDtoById(id);
    }

    @Override
    public Product findProductInCart(int id) {
        return productRepository.findProductInCart(id);
    }

    @Override
    public List<Product> findRecommendProduct(int cateId) {
        return productRepository.findAllByCategory(cateId);
    }
}
