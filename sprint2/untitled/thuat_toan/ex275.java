package thuat_toan;

import java.util.ArrayList;
import java.util.List;

public class ex275 {

    public static List<Integer> findIndex1(int[] arr, int number){
        List<Integer> result = new ArrayList<>();
        int length = arr.length;
        for (int i = 0; i < arr.length; i++) {
            for (int j = i+1; j < length; j++) {
                if(arr[i] + arr[j] == number){
                    result.add(i+1);
                    result.add(j+1);
                    break;
                }
            }
        }
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {1,10,8,20,0};
        System.out.println(findIndex1(arr,9));
    }
}
