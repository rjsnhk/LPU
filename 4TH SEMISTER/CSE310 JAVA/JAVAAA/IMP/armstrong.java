public class armstrong {
  
  //  Program to check whether a number is an Armstrong or not.
  
  public static void main(String[] args) {
    int num = 153;
    
    System.out.println("Number of digits: " + noOfDigits(num));
    if (isArmstrong(num))
      System.out.print("It is an Armstrong number");
    else
      System.out.print("It is not an Armstrong number");
  }
  
  /* Function to calculate the number of digits in a given number */
  static int noOfDigits(int x) {
    int count = 0;
    while (x != 0) {
      count++;
      x /= 10;
    }
    return count;
  }
  
  /* Function to check whether a number is an Armstrong or not */
  static boolean isArmstrong(int n) {
    int sum = 0, temp;
    int digCount = noOfDigits(n);
    
    /* Calculate sum of the number */
    while (n != 0) {
      temp = n % 10;
      // sum += temp * temp * temp;
      sum+=Math.pow(temp,digCount);
      n /= 10;
    }
    
    /* Check if sum is equal to the original number */
    if (sum == n)
      return true;
    else
      return false;
  }
}
