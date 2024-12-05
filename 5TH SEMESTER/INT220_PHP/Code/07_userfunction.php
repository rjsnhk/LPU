<?php
// function declaration
function sendmsg() {
  echo "Hey there";
  echo"<br>";
}
sendmsg();
?>


<!-- function with argument -->
<?php

function cse($course, $credit) {
  echo "$course with credit $credit<br>";
}

cse("HTML", 3);
cse("CSS",2);
cse("JavaScript", 3);
cse("PHP", 4);
cse("Node js", 5);
?>

<?php

// Loosely Typed Language
function add(int $a, int $b) {
  echo $a + $b;
  echo"<br>";
}
function conc(string $a, string $b) {
  echo $a.$b;
  echo"<br>";
}
function multi(float $a, float $b) {
  echo $a*$b;
  echo"<br>";
}
add(2, 3);  //5
add(2,"4"); //6
// add(2,"8 Boys")//error
conc("raj","esh");
multi(4,5)
?>


<?php
// PHP Default Argument Value
function setchildren(int $children = 0) {
  echo "Total number of children are : $children <br>";
}

setchildren(2);
setchildren(1);
setchildren();
setchildren(3);
?>



<?php
// Returning values
function addd(int $a, int $b) {
  return $a+$b;
}

echo "5 + 10 = " . addd(5,10) . "<br>";
echo "7 + 13 = " . addd(7,13) . "<br>";
echo "2 + 4 = " . addd(2,4)."<br>";
?>

<?php
// Return Type Declarations
function adddd(float $a, float $b) {
  return $a + $b;
}
echo adddd(1.2, 5.2); 
echo"<br>";
?>

<?php
// Type Casting
function aadd(float $a, float $b) {
  return (int)($a + $b);
}
echo aadd(1.2, 5.2); 
echo"<br>";
?>


<?php
/* Defining a function that multiply a number
by itself and return the new value */
function selfMultiply(&$number){
    $number *= $number;
    return $number;
}
 
$mynum = 5;
echo"<br>";
echo $mynum; // Outputs: 5
echo "<br>";
selfMultiply($mynum);
echo $mynum; // Outputs: 25
?>


<?php
// Passing Arguments to a Function by Reference
function product(&$value) {
  $value *= 5;
}

$num = 2;
product($num);
echo $num;
?>


<?php  
function adder(&$str2)  
{  
    $str2 .= 'Call By Reference';  
}  
$str = 'Hello ';  
echo"<br>";
adder($str);  
echo $str;  
?> 


<?php  
// Local variable
    function mytestt()  
    {  
        $lang = "PHP";   //Local variable
        echo "Web development language: " .$lang."<br>";  
    }  
    echo"<br>";
    mytestt();  
?> 

<?php  
    function mytest()  
    {  
        $lang = "JavA";  
        echo "Web development language: " .$lang."<br>";  
    }  
    mytest();  
    //using $lang (local variable) outside the function will generate an error  
    // echo $lang;  //error
?> 


<!-- Global variable -->
<?php  
	$lang = "PHP"; 
    function mytest3()  
    {  
        global $lang;
        echo $lang;  
		echo "<br>";
    }  
    mytest3();    
    echo $lang;  
?> 

<?php  
	$lang = "PHP"; 
    function mytest4()  
    {  
        $lang = "Java";
        echo $lang;  
		echo "<br>";
    }  
    mytest4();    
    echo $lang;  
?> 

<?php  
	$lang = "PHP"; 
    function mytest5()  
    {  
        // echo $lang;  //with out using global keyward
	echo "<br>";
    }  
    mytest5();    
?> 

<?php  
// another type to declare
	$lang = "PHP"; 
    function mytest7()  
    {  
		$l = $GLOBALS['lang'];  
        echo $l;  
		echo "<br>";
    }  
    mytest7();    
?> 

<?php  
// Global variable
    $num1 = 5;      //global variable  
    $num2 = 13;     //global variable  
    function global_var()  
    {  
            $sum = $GLOBALS['num1'] + $GLOBALS['num2'];  
            echo "Sum of global variables is: " .$sum."<br>";  
    }  
    global_var();  
?> 


<?php  
    $x = 5;  
    function mytest6()  
    {  
        $x = 7;  
        echo "value of x: " .$x;  
    }  
    mytest6();  
?> 




<!-- STATIC VARIABLE -->`
<?php  


    function static_var()  
    {  
        static $num1 = 2;       //static variable  
        $num2 = 5;          //Non-static variable  
        //increment in non-static variable  
        $num1++;  
        //increment in static variable  
        $num2++;  
        echo "Static: " .$num1 ."</br>";  
        echo "Non-static: " .$num2 ."</br>";  
    }  
      
//first function call  
    static_var();  
  
    //second function call  
    static_var();  
?> 

<?php

//static variable
function myTest8() {
  static $x = 1;
  echo $x;
  $x++;
}

myTest8();
echo "<br>";
myTest8();
echo "<br>";
myTest8();
?> 








