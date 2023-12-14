package thuat_toan;

import java.util.Map;
import java.util.TreeSet;

public class ex277 {
    public static int findSecondMax(int[] arr){
        TreeSet<Integer> treeSet = new TreeSet<>();
        for (int i = 0; i < arr.length; i++) {
            treeSet.add(arr[i]);
        }
        return treeSet.lower(treeSet.last());
    }

    public static void main(String[] args) {
        int[] arr = {3,2,4,2,5,5,4,5};
        System.out.println(findSecondMax(arr));
    }
}
