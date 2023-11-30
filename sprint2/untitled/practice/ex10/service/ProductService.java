package practice.ex10.service;


import practice.ex10.model.Product;
import practice.ex10.repository.IProductRepository;
import practice.ex10.repository.ProductRepository;

import java.util.List;

public class ProductService implements IProductService {
    IProductRepository repository = new ProductRepository();
    @Override
    public void getAll() {
        List<Product> productList = repository.getAll();
        for (Product product : productList) {
            System.out.println(product);
        }
    }

    @Override
    public void add(Product product) {
        try {
            repository.add(product);
        } catch (Exception e) {
            System.out.println("Lỗi");
        }
    }
}
