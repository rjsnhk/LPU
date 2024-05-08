/*package whatever //do not write package name here */

import java.io.*;
  class parent{
      public int x;
      public int y; 
                    // x , y
  }
  class child extends parent{
      public int z;   // z , x, y
  }
  class grandChild extends child{
      public int w;  // w , z, x, y
  }
class childdd {
       
	public static void main (String[] args) {
     grandChild obj = new grandChild();
       obj.x = 12;
       obj.y = 13;
       obj.y = 14;
       obj.w = 15;
     
	}
}
