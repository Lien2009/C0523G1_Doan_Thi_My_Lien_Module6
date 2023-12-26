package com.example.demo.dto;

import lombok.*;

import java.util.List;
import java.util.Set;

@Setter
@Getter
@Data
@Builder
public class ResponseContentDto {
    private int code;
    private String message;
    private Object data;

    public ResponseContentDto() {
    }

    public ResponseContentDto(int code, String message, Object data) {
        this.code = code;
        this.message = message;
        this.data = data;
    }

}
