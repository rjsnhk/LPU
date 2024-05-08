// public class func{
//     public  void fun(){
//         System.out.println("This is a function");
//     }
//     public static void main(String[] args) {
//         fun(); //we use static in  order to call the method without creating an object of that class
//     }
    
// }

// type2
// public class func{
//     public  void fun(){
//         System.out.println("This is a function");
//     }
//     public  void main(String[] args) {
//         fun(); //we use static in  order to call the method without creating an object of that class
//     }
    
// }


//type3
// public class func{
//     public static void fun(){
//         System.out.println("This is a function");
//     }
//     public static void main(String[] args) {
//         fun(); //we use static in  order to call the method without creating an object of that class
//     }
    
// }


//type4
public class func{
    public void fun(){
        System.out.println("This is a function");
    }
    public static void main(String[] args) { func obj=new func();
        obj.fun(); //creating an object and calling the method using that object
    }
    
}