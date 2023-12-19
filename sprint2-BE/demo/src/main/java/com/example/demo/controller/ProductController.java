package com.example.demo.controller;

import com.example.demo.dto.BestSellerDto;
import com.example.demo.dto.DetailProduct;
import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import com.example.demo.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

    @GetMapping("/getAllSort")
    public ResponseEntity<Page<ProductDto>> findAllSortByPoint(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                               @RequestParam(name = "limit", defaultValue = "8", required = false) int limit,
                                                               @RequestParam(name = "name", defaultValue = "", required = false) String name
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<ProductDto> productPage = productService.findAllSortByPoint(pageable, name);
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
        Page<ProductDto> productPage = productService.getProductByCategory(pageable, name, categoryId);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/findRecommendProduct/{categoryId}")
    public ResponseEntity<List<Product>> findRecommendProduct(@PathVariable int categoryId) {
        List<Product> productPage = productService.findRecommendProduct(categoryId);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/getProductByCateSort")
    public ResponseEntity<Page<ProductDto>> getAllSortByPoint(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                                              @RequestParam(name = "limit", defaultValue = "8", required = false) int limit,
                                                              @RequestParam(name = "name", defaultValue = "", required = false) String name,
                                                              @RequestParam(name = "categoryId", defaultValue = "", required = false) String categoryId
    ) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<ProductDto> productPage = productService.getProductByCategorySortByPoint(pageable, name, categoryId);
        if (productPage.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(productPage, HttpStatus.OK);
    }

    @GetMapping("/bestSeller")
    public ResponseEntity<List<BestSellerDto>> getBestSeller() {
        List<BestSellerDto> bestSellerDtoList = productService.findBestSeller();
        if (bestSellerDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(bestSellerDtoList, HttpStatus.OK);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<DetailProduct> findById(@PathVariable int id) {
        DetailProduct productDto = productService.findProductDtoById(id);
        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }

//    @PostMapping("/feedback")
//    public ResponseEntity<FeedbackPoint> create(@RequestParam(name = "point", defaultValue = "0", required = false) int point,
//                                                @RequestParam(name = "productId", defaultValue = "0", required = false) int productId
//    ) {
//        productService.addFeedback(point,productId);
//        return new ResponseEntity<>(HttpStatus.OK);
//    }
}
