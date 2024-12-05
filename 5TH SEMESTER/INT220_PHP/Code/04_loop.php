
<!-- while -->
<?php
$i = 1;
while($i <= 3){
    $i++;
    echo "The number is " . $i . "<br>";
}
?>

<!-- do while -->
<?php
$i = 1;
do{
    $i++;
    echo "The number is " . $i . "<br>";
}
while($i <= 3);
?>

<?php
for($i=1; $i<=3; $i++){
    echo "The number is " . $i . "<br>";
}
?>


<!-- for each last me variable rehta he idhar value is variable name to iterate and color is array name -->
<?php
$colors = array("Red", "Green", "Blue");
 
// Loop through colors array
foreach($colors as $value){
    echo $value . "<br>";
}
?>
<!-- Loop through superhero array -->
<?php
$superhero = array(
    "name" => "Peter Parker",
    "email" => "peterparker@mail.com",
    "age" => 18
);
 

foreach($superhero as $key => $value){
    echo $key . " : " . $value . "<br>";
}
?>


<!-- for loop -->
<?php
for($i=1;$i<=10;$i++){
echo "$i <br/>";
if($i==5){
break;
}
}
?>

<?php    
for($i=1;$i<=3;$i++){    
 for($j=1;$j<=3;$j++){    
  echo "$i   $j<br/>";    
  if($i==2 && $j==2){    
   break;    
  }    
 }    
}    
?> 

<!-- switch case -->

<?php        
$num=200;        
switch($num){        
case 100:        
echo("number is equals to 100");        
break;        
case 200:        
echo("number is equal to 200");        
break;        
case 50:        
echo("number is equal to 300");        
break;        
default:        
echo("number is not equal to 100, 200 or 500");        
}       
?>


<?php  
//declare an array of string  
$number = array ("One", "Two", "Three", "Stop", "Four");  
foreach ($number as $element) {  
if ($element == "Stop") {  
break;  
}  
echo "$element </br>";  
}  
?>  

<?php  
    //outer loop  
    for ($i =1; $i<=3; $i++) {  
        //inner loop  
        for ($j=1; $j<=3; $j++) {  
            if (!($i == $j) ) {  
                continue;       //skip when i and j does not have same values  
            }  
            echo $i.$j;  
            echo "</br>";  
        }  
    }  
?> 


<?php  
    //php program to demonstrate the use of continue statement  
  
    echo "Even numbers between 1 to 20: </br>";  
    $i = 1;  
    while ($i<=20) {  
        if ($i %2 == 1) {  
            $i++;  
            continue;   //here it will skip rest of statements  
        }  
        echo $i;  
        echo "</br>";  
        $i++;  
    }     
?>

<?php 
 $number = array ("One", "Two", "Three", "Stop", "Four"); 
 foreach ($number as $element) { 
 if ($element == "Stop") { 
 continue; 
 } 
 echo "$element </br>"; 
 } 
?> 
