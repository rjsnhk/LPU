// public class d4_loop {
//     public static void main(String[] args) {
//         for(int i=0;i<3;i++){
//             System.out.println("hello");
//         }
// int j=0;
//         while(j<=3){
//             System.out.println("world");
//             j++;
//         }


//     }
    
// }



//print the reverse a number
// import java.util.*;

// public class d4_loop {

//     public static void main(String[] args) {
//         Scanner sc=new Scanner(System.in);
//         int n=sc.nextInt();
//         while(n>0){
//             int ld=n%10;
//             System.out.print(ld);
//             n/=10;
//         }
//     }
// }



// store the reverse  number
import java.util.*;

public class d4_loop {

    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        int rev=0;
        while(n>0){
            int ld=n%10;
            rev=(rev*10)+ld;  /////for store the reverse num
            n/=10;
        }
        System.out.println(rev);
    }
}

