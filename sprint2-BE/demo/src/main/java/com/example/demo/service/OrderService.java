package com.example.demo.service;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
import com.example.demo.dto.OrderDetailDto;
import com.example.demo.dto.OrderDto;
import com.example.demo.dto.ResponseContentDto;
import com.example.demo.model.*;
import com.example.demo.repository.ICartRepository;
import com.example.demo.repository.IOrderRepository;
import com.example.demo.repository.IProductRepository;
import com.example.demo.repository.IUserRepository;
import lombok.var;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.*;
import java.util.concurrent.atomic.AtomicBoolean;
import java.util.concurrent.atomic.AtomicLong;

@Service
@Transactional
public class OrderService implements IOrderService {
    @Autowired
    private IOrderRepository orderRepository;

    @Autowired
    private ICartRepository cartRepository;

    @Autowired
    private IProductRepository productRepository;

    @Autowired
    private IUserRepository userRepository;

    ResponseContentDto responseContentDto = new ResponseContentDto();

    @Override
    public List<CartDto> getCart(int userId) {
        return orderRepository.getCart(userId);
    }

    @Override
    public void addCart(Cart cart) {
        orderRepository.addCart(cart);
    }

    @Override
    public ResponseContentDto updateCart(int userId, Set<CartCommand.CartPutUpdateCommand> cartsCommand) {
        try {
            Set<Optional<Cart>> carts = cartRepository.findListCartByUserId(userId);
            if (carts.isEmpty()) {
                responseContentDto.setCode(400);
                responseContentDto.setMessage("Không tồn tại giỏ hàng");
                return responseContentDto;
            }
            AtomicBoolean checkQuantityProduct = new AtomicBoolean(true);

            // Check số lượng sản phẩm còn lại
            for (CartCommand.CartPutUpdateCommand cartCommand : cartsCommand) {
                Optional<Product> optionalProduct = productRepository.findById(cartCommand.getProductId());
                optionalProduct.ifPresent(product -> {
                    if (product.getQuantity() < cartCommand.getQuantity()) {
                        checkQuantityProduct.set(false);
                    }
                });
            }

            // !checkQuantityProduct.get() === true => !true = false
            if (!checkQuantityProduct.get()) {
                responseContentDto.setCode(400);
                responseContentDto.setMessage("Số lượng sản phầm còn lại không đủ");
                return responseContentDto;
            }

            // Delete old cart
            for (Optional<Cart> cartOpt : carts) {
                cartOpt.ifPresent(cart -> {
                    cartRepository.deleteAllById(Collections.singleton(cart.getId()));
                });
            }
            var user = User.builder()
                    .id(userId)
                    .build();
            for (CartCommand.CartPutUpdateCommand cartCommand : cartsCommand) {
                Cart cart = new Cart();
                Optional<Product> optionalProduct = productRepository.findById(cartCommand.getProductId());
                optionalProduct.ifPresent(product -> {

                    // save new cart
                    checkQuantityProduct.set(true);
                    cart.setProduct(product);
                    cart.setUser(user);
                    cart.setQuantity(cartCommand.getQuantity());
                    orderRepository.addCart(cart);
                });
            }
            responseContentDto.setCode(200);
            responseContentDto.setMessage("Cập nhật giỏ hàng thành công");
            return responseContentDto;
        } catch (Exception e) {
            responseContentDto.setCode(500);
            responseContentDto.setMessage("Có lỗi xảy ra. Vui lòng kiểm tra lại");
            return responseContentDto;
        }
    }

    @Override
    public ResponseContentDto deleteCartById(int userId, int cartId) {
        try {
            Optional<Cart> cartOptional = cartRepository.findCartByUserIdAndCartId(userId, cartId);
            cartOptional.ifPresent(cart -> {
                cartRepository.deleteById(cartId);
            });
            responseContentDto.setCode(200);
            responseContentDto.setMessage("Xóa thành công");
        } catch (Exception e) {
            responseContentDto.setCode(500);
            responseContentDto.setMessage("Có lỗi xảy ra. Vui lòng kiểm tra lại");
        }
        return  responseContentDto;
    }

    @Override
    public ResponseContentDto addProductToCart(int userId, int productId) {
        Optional<Product> productOpt = productRepository.findById(productId);
        Optional<User> userOpt = userRepository.findById(userId);

        if (!productOpt.isPresent()) {
            responseContentDto.setCode(400);
            responseContentDto.setMessage("Không tìm thấy sản phẩm");
            return responseContentDto;
        }
        if (!userOpt.isPresent()) {
            responseContentDto.setCode(400);
            responseContentDto.setMessage("Không tìm thấy user");
            return responseContentDto;
        }
        AtomicBoolean checkQuantityProduct = new AtomicBoolean(false);

        // Tìm giỏ hàng của user thông qua userId và productId
        // 1. TÌm thấy => cập nhật số lượng lên +1
        // 2. Không tìm thấy => tạo mới giỏ hàng

        List<CartCommand.CartCreateCommand> listCartResponse = new ArrayList<>();
        Optional<Cart> cartOpt = cartRepository.findCartByUserIdAndProductId(userId, productId);
        if (cartOpt.isPresent()) {
            Cart cart = cartOpt.get();
           if (cart.getQuantity() + 1 <= productOpt.get().getQuantity()) {
                checkQuantityProduct.set(true);
                var newCart = Cart.builder()
                        .id(cart.getId())
                        .quantity(cart.getQuantity() + 1)
                        .product(productOpt.get())
                        .user(userOpt.get())
                        .build();
                cartRepository.save(newCart);
            };
        }else {
            if (productOpt.get().getQuantity() >= 1) {
                checkQuantityProduct.set(true);
                var newCart = Cart.builder()
                        .quantity(1)
                        .product(productOpt.get())
                        .user(userOpt.get())
                        .build();
                cartRepository.save(newCart);
            }
        }
        // 1. Sau khi thực hiện thành công thêm vào giỏi hàng\
        // 2. Lấy danh sách giỏ hàng mới nhất ra
        Set<Optional<Cart>> newListCart = cartRepository.findListCartByUserId(userOpt.get().getId());

        // 3. Thêm danh sách giỏ hàng mới vào response cho client
        listCartResponse.addAll(getNewListCart(newListCart));

        if (!checkQuantityProduct.get()) {
            responseContentDto.setCode(400);
            responseContentDto.setMessage("Số lượng sản phầm còn lại không đủ");
            return responseContentDto;
        }
        responseContentDto.setCode(200);
        responseContentDto.setMessage("Thêm sản phẩm vào giỏ hàng thành công");
        responseContentDto.setData(listCartResponse);

        return responseContentDto;
    }

    @Override
    public void addOrder(int new_id_account, int new_total_price, int new_payment_status) {
        orderRepository.addOrder(new_id_account,new_total_price,new_payment_status);
    }

    @Override
    public List<OrderDto> getAllOrder(int userId) {
        List<OrderDto> orderDtoList = orderRepository.getAllOrder(userId);
        return orderDtoList;
    }

    @Override
    public List<OrderDetailDto> getOrderDetail(int orderId) {
        List<OrderDetailDto> orderDetailDtoList = orderRepository.getOrderDetail(orderId);
        return orderDetailDtoList;
    }

    @Override
    public void updateFeedbackStatus(int orderDetailId,int point) {
        orderRepository.updateFeedbackStatus(orderDetailId,point);
    }

    private List<CartCommand.CartCreateCommand> getNewListCart (Set<Optional<Cart>> newListCart) {
        List<CartCommand.CartCreateCommand> listCartResponse = new ArrayList<>();
        for (Optional<Cart> newCartOpt: newListCart) {
            Optional<Product> productOpt = productRepository.findById(newCartOpt.get().getProduct().getId());

            newCartOpt.ifPresent(cartOp -> {
                var cartCreateCommand = CartCommand.CartCreateCommand.builder()
                        .productId(cartOp.getProduct().getId())
                        .quantity(cartOp.getQuantity())
                        .price(productOpt.get().getPrice())
                        .name(productOpt.get().getName())
                        .image(productOpt.get().getImage())
                        .description(productOpt.get().getDescription())
                        .productQuantity(productOpt.get().getQuantity())
                        .cartId(cartOp.getId())
                        .build();
                listCartResponse.add(cartCreateCommand);
            });
        }
        return listCartResponse;
    }
}
