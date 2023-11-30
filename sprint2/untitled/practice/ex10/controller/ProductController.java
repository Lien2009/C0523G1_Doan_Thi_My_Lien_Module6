package practice.ex10.controller;


import practice.ex10.model.Product;
import practice.ex10.service.IProductService;
import practice.ex10.service.ProductService;

public class ProductController {
    public static void main(String[] args) {
        IProductService productService = new ProductService();
        productService.add(new Product(1,"Coca",20000));
        productService.getAll();
    }
}
