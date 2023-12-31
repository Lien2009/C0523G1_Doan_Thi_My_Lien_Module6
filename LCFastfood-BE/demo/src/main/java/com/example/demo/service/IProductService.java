package com.example.demo.service;

import com.example.demo.dto.BestSellerDto;
import com.example.demo.dto.DetailProduct;
import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface IProductService {
    Page<ProductDto> getAll(Pageable pageable, String name);
    Page<ProductDto> findAllSortByPoint(Pageable pageable, String name);
    Page<ProductDto> getProductByCategory(Pageable pageable, String name, String categoryId);
    Page<ProductDto> getProductByCategorySortByPoint(Pageable pageable, String name, String categoryId);
    List<BestSellerDto> findBestSeller();
    Product findById(int id);
    DetailProduct findProductDtoById(int id);
    Product findProductInCart(int id);
    List<Product> findRecommendProduct(int cateId);
//    void addFeedback(int point, int productId);
}
