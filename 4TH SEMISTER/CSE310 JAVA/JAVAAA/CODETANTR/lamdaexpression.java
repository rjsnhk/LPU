
@FunctionalInterface
interface FI{
void  show();
  
}
@FunctionalInterface
interface KI{
void  show1(int i);
  
}
@FunctionalInterface
interface KI2{
void  show2(int i,int j);
  
}
public class lamdaexpression {
  public static void main(String[] args) {

    //we not need write long use lamda expression
    // FI obj=new FI() {
    //   public void show(){
    //     System.out.println("in show");
    //   }
    // };



    FI obj=()->System.out.println("in show");
    obj.show();

//show contain 2 line to execute
    KI obj1=i->{System.out.println("in show"+i);
    System.out.println("hii from ki");
  };
    obj1.show1(5);

//show havaing 2 parAMEter
    KI2 obj2=(i,j)->System.out.println("in show"+i+j);
    obj2.show2(5,6);
  }
}
