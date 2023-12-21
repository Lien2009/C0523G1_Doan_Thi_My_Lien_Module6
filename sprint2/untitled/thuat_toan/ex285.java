package thuat_toan;

import java.util.*;

public class ex285{
    public static void findThirdMax(int[] arr){
        int first = Integer.MIN_VALUE;
        int second = Integer.MIN_VALUE;
        int third = Integer.MIN_VALUE;
        if(arr.length<=2){
            System.out.println("Không cos số lớn thứ 3");
        } else {
            for (int i = 0; i < arr.length; i++) {
                if (arr[i] > first) {
                    third = second;
                    second = first;
                    first = arr[i];
                } else if (arr[i] > second && arr[i] < first) {
                    third = second;
                    second = arr[i];
                } else if (arr[i] > third && arr[i] < second) {
                    third = arr[i];
                }
            } if(third == Integer.MIN_VALUE){
                System.out.println("Khong");
            }else {
                System.out.println(third);
            }
        }
    }

    public static void main(String[] args) {
        int[] arr = {2,3};
        findThirdMax(arr);
    }
}
