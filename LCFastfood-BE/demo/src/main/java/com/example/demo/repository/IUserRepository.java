package com.example.demo.repository;

import com.example.demo.dto.CustomerDto;
import com.example.demo.model.Customer;
import com.example.demo.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface IUserRepository extends JpaRepository<User,Integer> {
    @Query(value = "select * from users where user_name = :userName and is_deleted = 0",nativeQuery = true)
    User findByUserName(@Param("userName") String userName);
    @Query(value = "select `name`, `address`,`phone`,`birthday`,`email` from customers where user_id = :userId and is_deleted = 0",nativeQuery = true)
    CustomerDto findCustomerByUser(@Param("userId") int userId);
    @Modifying
    @Transactional
    @Query(value = "UPDATE customers SET phone = :phone, email= :email, address= :address WHERE (user_id = :userId)", nativeQuery = true)
    void updateCustomer(@Param("phone") String phone, @Param("email") String email, @Param("address") String address,@Param("userId") int userId);
}
