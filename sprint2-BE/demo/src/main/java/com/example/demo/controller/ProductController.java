package com.example.demo.controller;

import com.example.demo.model.Product;
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
    public ResponseEntity<Page<Product>> getAll(@RequestParam(name = "limit", defaultValue = "2", required = false) int limit,
                                                @RequestParam(name = "page", defaultValue = "0", required = false) int page){
        Pageable pageable = PageRequest.of(page,limit);
        Page<Product> productPage = productService.getAll(pageable);
        if(productPage.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage,HttpStatus.OK);
    }
}
