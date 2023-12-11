package com.example.demo.controller;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
import com.example.demo.dto.ResponseContentDto;
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
    public ResponseEntity<?> getCart(@RequestParam(name = "page", defaultValue = "0", required = false) int page,
                                     @RequestParam(name = "limit", defaultValue = "2", required = false) int limit,
                                     @PathVariable int userId) {
        Pageable pageable = PageRequest.of(page, limit);
        Page<CartDto> cartDtoList = orderService.getCart(pageable, userId);
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

//    @PostMapping("/addCart/{productId}/{userId}")
//    public ResponseEntity<Object> addCart(@PathVariable Integer productId, @PathVariable Integer userId) {
//        Cart cart = new Cart();
//        Product product = productService.findById(productId);
//        Product product1 = productService.findProductInCart(productId);
//        User user = userService.findById(userId);
//        if (product1 != null) {
//            return new ResponseEntity<>("Món ăn này đã có trong giỏ hàng", HttpStatus.NOT_FOUND);
//        }
//        if (product.getQuantity() < 1) {
//            return new ResponseEntity<>("Hết món", HttpStatus.NOT_FOUND);
//        }
//        if (product == null) {
//            return new ResponseEntity<>("Không tìm thấy món", HttpStatus.NOT_FOUND);
//        }
//        if (user == null) {
//            return new ResponseEntity<>("Không tìm thấy tài khoản", HttpStatus.NOT_FOUND);
//        }
//        cart.setProduct(product);
//        cart.setUser(user);
//        cart.setQuantity(1);
//        orderService.addCart(cart);
//        return new ResponseEntity<>("Thêm vào giỏ hàng thành công!", HttpStatus.OK);
//    }

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
}
