package com.example.demo.repository;

import com.example.demo.model.Cart;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Optional;
import java.util.Set;

public interface ICartRepository extends JpaRepository<Cart, Integer> {
    @Query(value = "select c from cart c where c.user.id = :user")
    Set<Optional<Cart>> findListCartByUserId(@Param("user") int user);

    @Query(value = "select c from cart c where c.user.id = :userId and c.id = :cartId")
    Optional<Cart> findCartByUserIdAndCartId(@Param("userId") int userId, @Param("cartId") int cartId);

    @Query(value = "select c from cart c where c.user.id = :userId and c.product.id = :productId")
    Optional<Cart> findCartByUserIdAndProductId(@Param("userId") int userId, @Param("productId") int productId);
}
