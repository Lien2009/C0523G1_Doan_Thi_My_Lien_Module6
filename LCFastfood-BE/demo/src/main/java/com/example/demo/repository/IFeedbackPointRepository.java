//package com.example.demo.repository;
//
//import com.example.demo.model.FeedbackPoint;
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.data.jpa.repository.Modifying;
//import org.springframework.data.jpa.repository.Query;
//import org.springframework.data.repository.query.Param;
//import org.springframework.transaction.annotation.Transactional;
//
//public interface IFeedbackPointRepository extends JpaRepository<FeedbackPoint,Integer> {
//    @Modifying
//    @Transactional
//    @Query(value = "INSERT INTO feedbacks (`point`, `product_id`) VALUES ( :point, :productId)",nativeQuery = true)
//    void addFeedbackPoint(@Param("point") int point, @Param("productId") int productId);
//}
