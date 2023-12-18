package com.example.demo.controller;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
import com.example.demo.dto.OrderDetailDto;
import com.example.demo.dto.OrderDto;
import com.example.demo.dto.ResponseContentDto;
import com.example.demo.model.Order;
import com.example.demo.model.OrderDetail;
import com.example.demo.service.IOrderService;
import com.example.demo.service.IProductService;
import com.example.demo.service.IUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

@RestController
@CrossOrigin(maxAge = 3600, origins = "*")
@RequestMapping("/api/orders")
public class OrderController {
    @Autowired
    private IOrderService orderService;
    @Autowired
    private IProductService productService;
    @Autowired
    private IUserService userService;

    @GetMapping("/cart/{userId}")
    public ResponseEntity<?> getCart(@PathVariable int userId) {
        List<CartDto> cartDtoList = orderService.getCart(userId);
        if (cartDtoList.isEmpty()) {
            ResponseContentDto responseContentDto = new ResponseContentDto();
            responseContentDto.setCode(400);
            responseContentDto.setMessage("Không tìm thấy giỏ hàng");
            return new ResponseEntity<>(responseContentDto, HttpStatus.OK);
        }
        return new ResponseEntity<>(cartDtoList, HttpStatus.OK);
    }

    @PutMapping("/cart/{userId}/update")
    public ResponseEntity<?> updateCart(@PathVariable int userId, @RequestBody Set<CartCommand.CartPutUpdateCommand> cartsCommand) {
        ResponseContentDto result = orderService.updateCart(userId, cartsCommand);
        return ResponseEntity.ok(result);
    }


    @DeleteMapping("/cart/{userId}/delete/{cartId}")
    public ResponseEntity<?> deleteCartById(@PathVariable int userId, @PathVariable int cartId) {
        ResponseContentDto result = orderService.deleteCartById(userId, cartId);
        return ResponseEntity.ok(result);
    }

    @PostMapping("/cart/{userId}/add/{productId}")
    public ResponseEntity<?> addProductToCart(@PathVariable int userId, @PathVariable int productId) {
        ResponseContentDto result = orderService.addProductToCart(userId, productId);
        return ResponseEntity.ok(result);
    }
    @PostMapping("/addOrder")
    public ResponseEntity<?> addOrder(@RequestParam(name = "userId", defaultValue = "0", required = false) int userId,
                                      @RequestParam(name = "total", defaultValue = "0", required = false) int total,
                                      @RequestParam(name = "payment", defaultValue = "0", required = false) int payment
                                                                                         ){
        orderService.addOrder(userId,total,payment);
        return ResponseEntity.ok("Thêm thành công");
    }
    @GetMapping("/history/{userId}")
    public ResponseEntity<?> getAllOrder(@PathVariable int userId) {
        List<OrderDto> orderDtoList = orderService.getAllOrder(userId);
        if (orderDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderDtoList, HttpStatus.OK);
    }
    @GetMapping("/detail/{orderId}")
    public ResponseEntity<?> getOrderDetail(@PathVariable int orderId) {
        List<OrderDetailDto> orderDetailDtoList = orderService.getOrderDetail(orderId);
        if (orderDetailDtoList.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
        return new ResponseEntity<>(orderDetailDtoList, HttpStatus.OK);
    }
}
