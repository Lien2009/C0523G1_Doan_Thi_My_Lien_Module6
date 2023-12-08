package thuat_toan;

import java.util.ArrayList;
import java.util.List;

public class ex272 {
    public static boolean isPrime(int a) {
        if(a<2){
            return false;
        }
        for (int i = 2; i <= Math.sqrt(a); i++) {
            if(a%i == 0){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        System.out.println(isPrime(20));
    }
}
