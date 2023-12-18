package com.example.demo.repository;

import com.example.demo.dto.BestSellerDto;
import com.example.demo.dto.DetailProduct;
import com.example.demo.dto.ProductDto;
import com.example.demo.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.domain.Page;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IProductRepository extends JpaRepository<Product, Integer> {
    @Query(value = "select products.id, products.name, products.image, products.description, products.price, IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint\n" +
            "from products\n" +
            "left join feedbacks on products.id = feedbacks.product_id\n" +
            "where products.is_deleted = 0 and products.description like :name group by products.id ORDER BY products.price", nativeQuery = true)
    Page<ProductDto> findAll(Pageable pageable, @Param("name") String name);
    @Query(value = "select products.id, products.name, products.image, products.description, products.price, products.quantity,products.category_id as categoryId, IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint\n" +
            "from products\n" +
            "left join feedbacks on products.id = feedbacks.product_id\n" +
            "where products.id =:id", nativeQuery = true)
    DetailProduct findProductDtoById(@Param("id") int id);
    @Query(value = "select products.id, products.name, products.image, products.description, products.price, IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint\n" +
            "from products\n" +
            "left join feedbacks on products.id = feedbacks.product_id\n" +
            "where products.is_deleted = 0 and products.description like :name group by products.id ORDER BY feedbackPoint DESC, products.price asc", nativeQuery = true)
    Page<ProductDto> findAllSortByPoint(Pageable pageable, @Param("name") String name);

    @Query(value = "select products.id, products.name, products.image, products.description, products.price, IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint\n" +
            "            from products\n" +
            "            left join feedbacks on products.id = feedbacks.product_id\n" +
            "            left join categories on products.category_id = categories.id\n" +
            "            where products.is_deleted = 0 and products.description like :name and categories.id like :categoryId\n" +
            "            group by products.id ORDER BY products.price", nativeQuery = true)
    Page<ProductDto> findProductByCate(Pageable pageable, @Param("name") String name, @Param("categoryId") String categoryId);
    @Query(value = "select products.id, products.name, products.image, products.description, products.price, IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint\n" +
            "            from products\n" +
            "            left join feedbacks on products.id = feedbacks.product_id\n" +
            "            left join categories on products.category_id = categories.id\n" +
            "            where products.is_deleted = 0 and products.description like :name and categories.id like :categoryId\n" +
            "            group by products.id ORDER BY feedbackPoint DESC, products.price asc", nativeQuery = true)
    Page<ProductDto> findProductByCateSortByPoint(Pageable pageable, @Param("name") String name, @Param("categoryId") String categoryId);

    @Query(value = "select * from cart where product_id =:id", nativeQuery = true)
    Product findProductInCart(@Param("id") int id);

    @Query(value = "select products.id, products.name, products.image, products.description, products.price, \n" +
            "IFNULL(CEIL(AVG(feedbacks.point)), 0) as feedbackPoint, \n" +
            "sum(order_detail.quantity) as orderQuantity\n" +
            "from products \n" +
            "left join feedbacks on products.id = feedbacks.product_id\n" +
            "join order_detail on products.id = order_detail.product_id\n" +
            "group by order_detail.product_id\n" +
            "order by orderQuantity desc\n" +
            "limit 8", nativeQuery = true)
    List<BestSellerDto> findBestSeller();
    @Query(value = "select * from products where category_id =:cateId limit 2", nativeQuery = true)
    List<Product> findAllByCategory(@Param("cateId") int cateId);


}
