public class array2 {
    public static void main(String[] args) {
        int ar[]={2,5,6,7,4,6,5,1,9,10};
        
    // for(int i=0;i<ar.length;i++){
        
    //     for(int j=i+1;j<ar.length;j++){
    //         if(ar[i]==ar[j])
    //         System.out.println(ar[i]);
    //     }
    // }
    int sum=10;
    for(int i=0;i<ar.length;i++){
        int diff=sum-ar[i];
        for(int j=i+1;j<ar.length;j++){
            if(diff==ar[j])
            System.out.println(ar[i]+" "+ar[j]);
        }
    }
    

    }
}
