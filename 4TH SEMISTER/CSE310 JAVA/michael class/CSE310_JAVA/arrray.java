import java.util.Scanner;

public class arrray {
    public static void main(String[] args) {
        int[] marks={10,20,30,89,68,57,45,89};
//         System.out.println(marks[0]);
//     System.out.println("Length of array is : "+marks.length);
//     for (int i=0;i<marks.length;i++){
//         System.out.print(marks[i]+" ");
//     }
//     for(int i=0;i<marks.length;i++){
//         if(marks[i]%2==0){
//             System.out.println(marks[i]);
//     }
//     }
//     int e=48;
//     int i=0;
//     for(;i<marks.length;i++){
//         if(marks[i]==e){
// System.out.println(i);
// break;
//     }
//     if(i==marks.length){
//     System.out.println("Number not found");
// }
//     }

// int sum=0;
// int multi=1;
// for(int i=0;i<marks.length;i++){
// sum=sum+marks[i];
// multi=multi*marks[i];
// }
// System.out.println(sum);
// System.out.println(multi);

int[] a2;
a2 = new int[5];  //Declaration and initialization
Scanner sc=new Scanner(System.in);
for(int i=0;i<5;i++){
    a2[i]=sc.nextInt();
}
for(int i=0;i<5;i++){
    System.out.print(a2[i]+" ");
}
}}
