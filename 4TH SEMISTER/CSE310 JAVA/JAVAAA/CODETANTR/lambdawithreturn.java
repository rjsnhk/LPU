@FunctionalInterface
interface A{
  int add(int i,int j);
}
public class lambdawithreturn {
  public static void main(String[] args) {

    //originally likha jata he using functional interface
//     A obj =new A(){
//     public int add(int i,int j){

//     return i+j; 
//   }
// };


    //A obj =(int i,int j)->return i+j;//error so we remove return
    A obj =(i,j)->i+j;//error so we remove return

  int result=obj.add(5,7);
  System.out.println("sum = "+result);
}
}
