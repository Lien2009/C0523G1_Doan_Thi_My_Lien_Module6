package thuat_toan;

public class ex270 {
    public static Integer sumMaxMin (int[] arr){
        int max = arr[0];
        int min = arr[0];
        int sum = 0;
        for (int i = 1; i < arr.length; i++) {
            if(arr[i] > max){
                max = arr[i];
            }else if(arr[i] < min){
                min = arr[i];
            }
        }
        return sum = max + min;
    }

    public static void main(String[] args) {
        int[] arr = {1,-2,10,3,100,0};
        System.out.println(sumMaxMin(arr));
    }
}
