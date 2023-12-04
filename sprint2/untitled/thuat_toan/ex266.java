package thuat_toan;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ex266 {
    public static Map<String, Integer> countWord(String text){
        Map<String,Integer> map = new HashMap<>();
        String[] arr = text.split(" ");
        for (int i = 0; i < arr.length; i++) {
            if(map.containsKey(arr[i])){
                int count = map.get(arr[i]);
                map.put(arr[i],count+1);
            }else {
                map.put(arr[i],1);
            }
        }
        return map;
    }
    public static String noSimilarWord(String text){
        String[] arr = text.split(" ");
        List<String> list = new ArrayList<>();
        for (int i = 0; i < arr.length; i++) {
            if(!list.contains(arr[i])){
                list.add(arr[i]);
            }
        }
        String newText = String.join(" ", list);
        return newText;
    }

    public static void main(String[] args) {
        System.out.println(countWord("toi muon di muon choi di qua"));
        System.out.println(noSimilarWord("toi muon di muon choi di qua"));
    }
}
