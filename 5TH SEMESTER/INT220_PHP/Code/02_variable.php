<?php 
 echo'hello world';
?>

<br>

<!-- datatype -->
<?php


//4 data types

//    Scalar data type --Integer, Float(also known as doubles in PHP), String, Boolean

//    Compound data type

//    Special data type

//    Pseudo data type




$a=50;
$flo=23.45;
$str="hello";
$ch='a';
echo $a*$flo;


echo"the number is $a";

echo"Lorem    <br>   Ipsum has \n been the  \t industry's standard dummy \\ text ever since the  1500s, when an unknown \" printer took a galley of type and scrambled";



?>


<!-- int datatype  -->


<?php 

$positiveInt = 123;     // A positive integer 
$negativeInt = -456;  // A negative integer 
$zero = 0;                  // Zero 
$hexInt = 0x1A;         // 0x  first likh te he -- A hexadecimal integer (26 in decimal) 
$octalInt = 0755;       // An octal integer (493 in decimal) 
$binaryInt = 0b1010; // 0b  first likh te he -- A binary integer (10 in decimal) 
echo"<br>";
echo $positiveInt;      // Outputs: 123 
echo"<br>";
echo $hexInt;            
echo"<br>";


$x=45.4678;
$y=0;
echo"<br>";
echo is_float($x);
echo"<br>";
echo is_bool($y); ///number not work like bool


//print zero as 
echo"<br>";
echo is_double($x);

echo"<br>";
echo round($x,2);
echo"<br>";
echo floor($x);
echo"<br>";
echo ceil($x);
echo"<br>";
echo number_format($x); //round figure krta he ye

echo"<br>";


?>

<?php
$a=0.1+0.2;
if(()($a)==0.3){
  echo"Equal";
}
else echo"Not equal";

?>



