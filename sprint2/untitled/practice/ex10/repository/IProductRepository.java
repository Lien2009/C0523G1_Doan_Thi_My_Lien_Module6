package practice.ex10.repository;



import practice.ex10.model.Product;

import java.util.List;

public interface IProductRepository {
    List<Product> getAll();
    void add(Product product);

}
