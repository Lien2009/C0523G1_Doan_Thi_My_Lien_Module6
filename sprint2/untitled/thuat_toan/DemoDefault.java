package thuat_toan;

public class DemoDefault implements Default {
//    @Override
//    public void defaultMethod() {
//        Default.super.defaultMethod();
//    }

    public static void main(String[] args) {
        Default.staticMthod();
        DemoDefault demoDefault = new DemoDefault();
        demoDefault.defaultMethod();
    }

}
