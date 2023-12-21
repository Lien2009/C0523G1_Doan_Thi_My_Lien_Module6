package thuat_toan;

public interface Default {
    default void defaultMethod(){
        System.out.println("2");
    }
    static void staticMthod(){
        System.out.println("3");
    }
}
