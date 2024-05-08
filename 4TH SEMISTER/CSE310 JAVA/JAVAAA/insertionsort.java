public class insertionsort {
  public static void main(String[] args) {
    int[] array ={23,34,21,27,54};
    for(int i=0;i<array.length-1;i++) {
      for(int j=i+1;j>0;j--){
        if(array[j]<array[j-1])
           swap(array,j-1,j);
        else
         break;
      }
  }
for(int i=0;i<array.length;i++){
  System.out.println(array[i]);
}  }

  static void swap(int arr[],int a,int b){
    int temp=arr[a];
    arr[a]=arr[b];
    arr[b]=temp;
  }
}
