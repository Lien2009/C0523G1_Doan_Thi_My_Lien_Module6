package thuat_toan;

import java.util.List;

public class ex280 {
    public static boolean opositeArr(int[] arr){
        for (int i = 0; i < arr.length/2; i++) {
            if(arr[i] != arr[arr.length-1-i]){
                return false;
            }
        }
        return true;
    }

    public static void main(String[] args) {
        int[] arr = {1,2,3,4,4,2,1};
        System.out.println(opositeArr(arr));
    }
}
