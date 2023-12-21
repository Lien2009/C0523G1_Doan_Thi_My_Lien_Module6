package thuat_toan;

import java.util.ArrayList;
import java.util.List;

public class Stream {
    public static void main(String[] args) {
        List<Integer> myList = new ArrayList<>();
        for (int i = 0; i < 100; i++) myList.add(i);
        java.util.stream.Stream<Integer> sequentialStream = myList.parallelStream();
        java.util.stream.Stream<Integer> highNum = sequentialStream.filter(p -> p>90);
        highNum.forEach(p-> System.out.println(p));
    }
}
