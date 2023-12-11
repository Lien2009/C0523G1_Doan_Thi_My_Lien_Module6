package thuat_toan;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;

public class ex273 {
    public static String batPhan(int number){
        List<Integer> list = new ArrayList<>();
        String output = "";
        while (number > 0){
            int result = number % 8;
            number = number/8;
            list.add(result);
        }
        Collections.reverse(list);
        for (int i = 0; i < list.size(); i++) {
            output += list.get(i);
        }
        return output;
    }

    public static void main(String[] args) {
        System.out.println(batPhan(21));
    }
}
