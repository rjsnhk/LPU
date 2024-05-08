public class leapyear {
  static boolean isLeapYear(int y){
    if(y%4==0&&y%100!=0||y%400==0) return true;
    else return false;
  }
  
  public static void main(String[] args) {
    int year = 1500;
    
    System.out.println("Is " + year + " a leap year?");
    
    if (isLeapYear(year)) {
      System.out.println("\tYes!");
    } else {
      System.out.println("\tNo.");
    }
  }
  
  
  
}
