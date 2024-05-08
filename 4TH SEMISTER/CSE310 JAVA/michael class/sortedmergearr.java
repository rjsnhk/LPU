public class sortedmergearr {
  public static void main(String[] args) {
    int[] arr1 ={2,4,6};
    int[] arr2 = {1,3,5};
    int[] sorted=new int[arr1.length+arr2.length];
    for(int i=0;i<3;i=i++){
      int j=0;
      for(;j<6;j=j+2){
      if(arr1[i]<arr2[i]){
        sorted[j]=arr1[i];
        sorted[j+1]=arr2[i];
      }
      else{
        sorted[j]=arr2[i];
        sorted[j+1]=arr1[i];
      }
    }
  }
  for(int i=0;i<sorted.length;i++){
    System.out.println(sorted[i]);
  }
  }
}
