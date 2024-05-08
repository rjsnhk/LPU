/**
 * reversenum
 */
public class reversenum {

  public static void main(String[] args) {
    System.out.println("Enter a number:");
    int num = Integer.parseInt(System.console().readLine());
    
    // Call the method to reverse the number and display it
    System.out.println("Reversed Number: " + reverseNumber(num));
  }

  // Method to reverse the number
  public static int reverseNumber(int n) {
    int rev = 0;    
    while (n != 0) { 
      rev = rev * 10 + n % 10; 
      n /= 10;  
    }   
    return rev;  
  }

}