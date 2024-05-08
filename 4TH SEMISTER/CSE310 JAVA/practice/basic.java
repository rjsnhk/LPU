// class basic {

//     public static void main(String[] args) {
//         System.out.print("hii");
//     }
// }

import java.util.*;
public class basic {
    public static void main(String[] args) {
        Scanner a=new Scanner(System.in);
        int n=a.nextInt();

        if(n>0){
            System.out.println("positive");
        }
        else if(n<0){
            System.out.println("Negative");
        }
        else{
            System.out.println(" number is 0");
        }
    }
    
}