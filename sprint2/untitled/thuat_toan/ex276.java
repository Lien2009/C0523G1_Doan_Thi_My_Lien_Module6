package thuat_toan;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class ex276 {
    public static int converttoNumber(String text){
        int result = 0;
        Map<Character, Integer> laMa = new HashMap<>();
        laMa.put('I',1);
        laMa.put('V',5);
        laMa.put('X',10);
        //III =3 IV=4  VI=6 XIII=13
        for (int i = 0; i < text.length(); i++) {
            int currentValue = laMa.get(text.charAt(i));
            if(i<text.length()-1 && currentValue < laMa.get(text.charAt(i+1))){
                result -= currentValue;
            }else {
                result += currentValue;
            }
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(converttoNumber("IV"));
    }
}
