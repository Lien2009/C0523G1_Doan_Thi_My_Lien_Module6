package thuat_toan;

import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;

public class ex274 {
    public static String hour(String s1, String s2){
        DateTimeFormatter dateTimeFormatter = DateTimeFormatter.ofPattern("HH:mm:ss");
        LocalTime localTime1 = LocalTime.parse(s1);
        LocalTime localTime2= LocalTime.parse(s2);
        LocalDateTime localDateTime1 = LocalDateTime.now().with(localTime1);
        LocalDateTime localDateTime2 = LocalDateTime.now().with(localTime2);
        LocalDateTime sum = localDateTime1.plusHours(localDateTime2.getHour()).plusMinutes(localDateTime2.getMinute()).plusSeconds(localDateTime2.getSecond());
        String result = dateTimeFormatter.format(sum);
        return  result;
    }

    public static void main(String[] args) {
        System.out.println(hour("11:20:30","07:35:45"));
    }
}
