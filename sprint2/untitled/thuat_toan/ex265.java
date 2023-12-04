package thuat_toan;

import java.util.HashMap;
import java.util.Map;

public class ex265 {
    public static Map<Integer, Integer> similarNumber(int[] arr1, int[] arr2) {
        Map<Integer, Integer> map = new HashMap<>();
        for (int i = 0; i < arr1.length; i++) {
            int count = 0;
            if (map.containsKey(arr1[i])) {
                count = map.get(arr1[i]);
                map.put(arr1[i], count + 1);
            } else {
                for (int j = 0; j < arr2.length; j++) {
                    if (arr1[i] == arr2[j]) {
                        if (map.containsKey(arr1[i])) {
                            count = map.get(arr1[i]);
                            map.put(arr1[i], count + 1);
                        } else {
                            map.put(arr1[i], 1);
                        }
                    }
                }
            }
        }
        return map;
    }

    public static void main(String[] args) {
        int[] arr1 = {1, 3, 1, 18, 2};
        int[] arr2 = {0, 3, 0, 18, 1};
        System.out.println(similarNumber(arr1, arr2));
    }
}
