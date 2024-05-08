// import java.util.*;

// public class condition {
//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         int x=sc.nextInt();
//         if(x>=18){
//             System.out.println("hii");
//         }
//         else if(x<18 && x>15)
//         System.out.println("sorry");
//         else
//         System.out.println("child");
//     }
// }

import java.util.Scanner;
public class condition {

    public static void main(String[] args) {
        Scanner input=new Scanner(System.in);
        
        System.out.println("Enter Age =");
        int age=input.nextInt();
        System.out.println("enter gender =");
        char g=input.next().charAt(0);  //HERE WE CONVERT STRING TO CHAR
        if(g=='M'){
            if(age>18&&age<30){
                System.out.println("Vote");
            }
            else{
                System.out.println("you can't vote");
            }
        }
        else if(g=='F'){
            if(age>16)
            System.out.println("vote");
            else
            System.out.println("you can't");
        }
        else
        System.out.println("you can't");
    }
}