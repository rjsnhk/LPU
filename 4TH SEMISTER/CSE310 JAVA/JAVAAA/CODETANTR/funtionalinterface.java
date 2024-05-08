@FunctionalInterface
/**
 * funtionalinterface == single abstract interface
 */
interface FI{
void  show();
// void error(); because it functionalinterface
  
}

//we have not define a class which implement interface
// class TestFI implements FI {
//   // public void show(){
//   //   System.out.println("in show");
//   // }
// }
public class funtionalinterface{
  public static void main(String[] args) {
    FI obj=new FI() {
      public void show(){
        System.out.println("in show");
      }
    };
    obj.show();
  }
}