package thuat_toan;

public class ex278 {
    public static void draw(int height){
        for (int i = 0; i < height; i++) {
            for (int j = 0; j < height*2 -1; j++) {
                if(j == height-1-i || j == height-1+i || i==height-1){
                    System.out.print("*");
                }
                else {
                    System.out.print("/");
                }
            }
            System.out.println("");
        }
    }

    public static void main(String[] args) {
        draw(5);
    }
}
