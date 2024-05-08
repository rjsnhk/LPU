class helper{
public int x;
static int y;
}

public class func2 {
public static void main(String[] args){
helper.y=18;
System.out.println(helper.y);
helper obj1 = new helper();
helper obj2 = new helper();
obj1.x=20;
obj2.y=100;
System.out.println(obj1.y);
}
}