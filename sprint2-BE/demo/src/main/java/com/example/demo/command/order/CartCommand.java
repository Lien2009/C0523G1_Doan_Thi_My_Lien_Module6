package com.example.demo.command.order;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
public class CartCommand {

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CartPutUpdateCommand {
        int quantity;
        int productId;
    }

    @Data
    @Builder
    @AllArgsConstructor
    @NoArgsConstructor
    public static class CartCreateCommand {
        int productId;
        int quantity;
        int price;
        String name;
        String image;
        String description;
        int productQuantity;
        int cartId;
    }
}
