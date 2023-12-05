package thuat_toan;

public class ex268 {
    public static Integer reverseNum(int number){
        int result = 0;
        while (number!=0){
            int digit = number%10;
            result = result * 10 + digit;
            number = number/10;
        }
        return result;
    }

    public static void main(String[] args) {
        System.out.println(reverseNum(1234));
    }
}
