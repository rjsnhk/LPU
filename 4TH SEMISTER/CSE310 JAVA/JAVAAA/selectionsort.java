public class selectionsort {

  public static void main(String[] args) {
    int arr[]={33,23,12,54,22};
    for(int i=0;i<arr.length;i++){
      int last=arr.length-i-1;
      int maxind=maxindex(arr,last);  //
      
      swap(arr,maxind,last);

      
    }
    for(int i=0;i<arr.length;i++){
      System.out.println(arr[i]);
    }
  }
    static int maxindex(int a[],int l){
      int max=0;
      for(int i=1;i<l;i++){
        
        if(a[i]>a[max]){
          max=i;
        }
        
      }
      return max;
    }
    static void swap(int ar[],int a,int b){
      int temp=ar[a];
      ar[a]=ar[b];
      ar[b]=temp;
    }
  
}