import java.util.*;

public class array1 {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int a[] = new int[n];
        
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
        
        for (int i = 0; i < n; i++) {
            if (a[i] % 2 == 0 && a[i] % 3 == 0) {
                System.out.print(" fizzbuzz ");
            } else if (a[i] % 2 == 0) {
                System.out.print(" fizz ");
            } else if (a[i] % 3 == 0) {
                System.out.print(" buzz ");
            } else if(a[i]==1){
                System.out.print(a[i]);
            }
        }
    }
}
