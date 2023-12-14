package thuat_toan.demo;

import java.util.HashMap;
import java.util.Map;

public class SoLaMa {
    public static String convertLama(String text) {
        // IV, XIV
        Map<Character, Integer> map = new HashMap<>();
        int result = 0;
        map.put('I',1);
        map.put('V',5);
        map.put('X',10);
        for (int i = 0; i < text.length(); i++) {
            int currentVlaue = map.get(text.charAt(i));
            if(currentVlaue < map.get(text.charAt(i+1)) && i < text.length()-1){
                result -= currentVlaue;//10-1=9
            }else {
                result += currentVlaue;//10// 9+5
            }
        }
        return "";
    }


}
