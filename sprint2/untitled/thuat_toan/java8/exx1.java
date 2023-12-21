package thuat_toan.java8;

import java.util.Arrays;

public class exx1 {
    public static void main(String[] args) {
        int[] arr = {1,2,4,2};
        System.out.println(Arrays.stream(arr).reduce(0,(a,b)->(a+b)));
    }
}
