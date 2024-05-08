import java.util.Scanner;

public class switchcase {
    public static void main(String[] args) {
        Scanner in=new Scanner(System.in);
        int x=in.nextInt();
        switch (x) {
            case 1:
                System.out.println("111");
                break;
            case 2:
                System.out.println("222");
                break;
            case 3:
                System.out.println("333");
                break;
            case 4:
                System.out.println("444");
                break;
        
            default:
            System.out.println("nothing");
                break;
        }
    }
}
