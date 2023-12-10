package com.example.demo.controller;

import com.example.demo.dto.ProductDto;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("api/products")
public class ProductController {
    @Autowired
    private IProductService productService;

    @GetMapping("/getAll")
    public ResponseEntity<Page<ProductDto>> getAll(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                   @RequestParam(name = "limit", defaultValue = "8", required = false) int limit,
                                                   @RequestParam(name = "name", defaultValue = "", required = false) String name
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<ProductDto> productPage = productService.getAll(pageable, name);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
    @GetMapping("/getProductByCate")
    public ResponseEntity<Page<ProductDto>> getAll(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                   @RequestParam(name = "limit", defaultValue = "8", required = false) int limit,
                                                   @RequestParam(name = "name", defaultValue = "", required = false) String name,
                                                   @RequestParam(name = "categoryId", defaultValue = "", required = false) String categoryId
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<ProductDto> productPage = productService.getProductByCategory(pageable, name,categoryId);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }
}
