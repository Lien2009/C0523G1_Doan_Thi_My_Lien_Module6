package thuat_toan;

import java.util.ArrayList;
import java.util.List;

public class ex279 {
    public static String reverseText(String text){
        String newText = "";
        for (int i = text.length()-1; i >=0 ; i--) {
            newText += text.charAt(i);
        }
        return newText;
    }

    public static void main(String[] args) {
        System.out.println(reverseText("nguyen dinh"));
    }
}
