package thuat_toan;

public class ex264 {
    public static String sortString(String text){
        char[] array = text.toCharArray();
        for (int i = 0; i < array.length-1; i++) {
            for (int j = i+1; j < array.length; j++) {
                if(array[i] > array[j]){
                    char temp = array[i];
                    array[i] = array[j];
                    array[j] = temp;
                }
            }
        }
        String result = String.valueOf(array);
        return result;
    }

    public static void main(String[] args) {
        System.out.println(sortString("abdfBf"));
    }
}
