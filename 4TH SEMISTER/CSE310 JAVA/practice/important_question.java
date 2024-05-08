import java.util.*;

public class important_question {
    public static void main(String[] args) {
        Scanner sc=new Scanner(System.in);
        int n=sc.nextInt();
        //sum of digits
        int sum=0;
        while(n>0){
            int ld=n%10;
            sum+=ld;
            n=n/10;
        }
        System.out.println("Sum ="+sum);


        //reverse a num
        //prime no
        //pallindromic no
        //reverse the string
        //prime and pallindrome
        //factorial
        //fibonnaci
        //leap year
    }
}
