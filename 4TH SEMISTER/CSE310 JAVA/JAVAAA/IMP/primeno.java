public class primeno {
  // 1. 是否为素数
  static boolean isPrime(int n) {
    if (n <= 1) return false;
    for (int i = 2; i * i <= n; i++) {
      if (n % i == 0) return false;
    }
    return true;
  }
  
  // 2. 生成素数序列  
  static void generatePrimes(int start, int end) {
    System.out.println("prime numbers between " + start + " and " + end + ":");
    while (start <= end) {
      if (isPrime(start)) System.out.print(start + "\t");
      start++;
    }
    System.out.println();
  }
  
  public static void main(String[] args) {
    int start = 15;
    int end = 30;
    
    // 调用函数，输出素数序列
    generatePrimes(start, end);
  }

  
}
