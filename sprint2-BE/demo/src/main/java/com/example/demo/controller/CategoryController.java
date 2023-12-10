package com.example.demo.controller;

import com.example.demo.model.Category;
import com.example.demo.service.ICategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/categories")
public class CategoryController {
    @Autowired
    private ICategoryService categoryService;
    @GetMapping
    public ResponseEntity<List<Category>> getAll(){
        List<Category> categoryList = categoryService.getAll();
        if(categoryList.isEmpty()){
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(categoryList,HttpStatus.OK);
    }
    @GetMapping("/{id}")
    public ResponseEntity<Category> findById(@PathVariable int id){
        Category category = categoryService.findById(id);
        return new ResponseEntity<>(category,HttpStatus.OK);
    }

}
