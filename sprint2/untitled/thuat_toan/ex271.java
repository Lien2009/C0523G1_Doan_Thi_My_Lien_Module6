package thuat_toan;

import java.util.ArrayList;
import java.util.List;

public class ex271 {
    public static List<Integer> fibonacci(int number){
        List<Integer> arr = new ArrayList<>();
        int a = 0;
        int b = 1;
        arr.add(a);
        while (b<number){
            arr.add(b);
            int temp = b;
            b = a + b;
            a = temp;
        }
        return arr;
    }

    public static void main(String[] args) {
        System.out.println(fibonacci(100));
    }
}
