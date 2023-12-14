package thuat_toan;

import java.util.HashMap;
import java.util.HashSet;
import java.util.Map;
import java.util.Set;

public class ex263 {
    public static Map<Character, Integer> countSimilarChar(String text){
        Map<Character,Integer> map = new HashMap<>();
        for (int i = 0; i < text.length(); i++) {
            char word = text.charAt(i);
            if(map.containsKey(word)){
                int count = map.get(word);
                map.put(word, ++count);
            } else {
                map.put(word, 1);
            }
        }
        return map;
    }
    public static Set<Character> SimilarChar(String text){
        Set<Character> set = new HashSet<>();
        for (int i = 0; i < text.length(); i++) {
            set.add(text.charAt(i));
        }
        return set;
    }

    public static void main(String[] args) {
        System.out.println(countSimilarChar("abgsfa"));
        System.out.println(SimilarChar("abgsfaBbb"));
    }
}
