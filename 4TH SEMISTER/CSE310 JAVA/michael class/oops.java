import java.util.*;

class Demo {
    public int x;
    private int y;
    //intermediate setter function
    public void setY(int v) {
        y = v;
    }
    public void getx(){
        
        System.out.println(x);
    }

    void func() {
        System.out.println("hello");
        System.out.println(y);
    }
    public int gety(){
        return y;
    }
}
class oops{
    public static void main(String[] args) {
        Demo obj = new Demo();
        obj.x = 10;
        obj.setY(40);
        
        obj.func();
        System.out.println(obj.x);
        obj.getx();
        // int val=obj.y;
        int val=obj.gety();

        System.out.println(val);
    }
}
