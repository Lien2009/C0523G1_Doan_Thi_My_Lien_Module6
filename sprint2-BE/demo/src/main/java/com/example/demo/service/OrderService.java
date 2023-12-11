package com.example.demo.service;

import com.example.demo.command.order.CartCommand;
import com.example.demo.dto.CartDto;
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
    public Page<CartDto> getCart(Pageable pageable, int userId) {
        return orderRepository.getCart(pageable, userId);
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

        cartOpt.ifPresentOrElse(
                (cart) -> {
                    if (cart.getQuantity() + 1 <= productOpt.get().getQuantity()) {
                        checkQuantityProduct.set(true);
                        var newCart = Cart.builder()
                                .id(cart.getId())
                                .quantity(cart.getQuantity() + 1)
                                .product(productOpt.get())
                                .user(userOpt.get())
                                .build();
                        cartRepository.save(newCart);
                        Set<Optional<Cart>> newListCart = cartRepository.findListCartByUserId(userOpt.get().getId());
                        listCartResponse.addAll(getNewListCart(newListCart, productOpt.get()));
                    }
                },
                () -> {
                    if (productOpt.get().getQuantity() >= 1) {
                        checkQuantityProduct.set(true);
                        var newCart = Cart.builder()
                                .quantity(1)
                                .product(productOpt.get())
                                .user(userOpt.get())
                                .build();
                        cartRepository.save(newCart);
                        Set<Optional<Cart>> newListCart = cartRepository.findListCartByUserId(userOpt.get().getId());
                        listCartResponse.addAll(getNewListCart(newListCart, productOpt.get()));

                    }
                }
        );

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

    private List<CartCommand.CartCreateCommand> getNewListCart (Set<Optional<Cart>> newListCart, Product product) {
        List<CartCommand.CartCreateCommand> listCartResponse = new ArrayList<>();
        for (Optional<Cart> newCartOpt: newListCart) {
            newCartOpt.ifPresent(cartOp -> {
                var cartCreateCommand = CartCommand.CartCreateCommand.builder()
                        .productId(cartOp.getProduct().getId())
                        .quantity(cartOp.getQuantity())
                        .price(product.getPrice())
                        .name(product.getName())
                        .image(product.getImage())
                        .description(product.getDescription())
                        .productQuantity(product.getQuantity())
                        .cartId(cartOp.getId())
                        .build();
                listCartResponse.add(cartCreateCommand);
            });
        }
        return listCartResponse;
    }
}
