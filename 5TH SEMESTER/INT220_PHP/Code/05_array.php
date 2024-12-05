
<!-- index array -->
<?php
$courses = array("PHP", "Laravel", "Node js"); 
$class =["a","b","c"];
echo "I like " . $courses[0] . ", " . $courses[1] . " and " . $courses[2];
echo"<br>";
echo "I am Having classes like".$class[0].$class[1].$class[2];
echo "<br>";
echo count($courses);
?>


<!-- for loop -->
<?php
$courses = array("PHP", "Laravel", "Node js"); 
$courseslength = count($courses);

for($x = 0; $x <$courseslength; $x++) {
  echo $courses[$x];
  echo "<br>";
}
?>

<!-- for each loop -->
<?php
$courses = array("PHP", "Laravel", "Node js");
 
// Loop through colors array
foreach($courses as $course){
    echo $course . "<br>";
}
?>

<!-- Associative Array -->

<?php
$courses = array("INT220"=>"PHP", "INT221"=>"Laravel", "INT222"=>"Node js");
$address=["name"=>"raj","age"=>12,"class"=>"lkg"];
echo "INT 220 is ".$courses['INT220'].". INT 221 is ".$courses['INT221'].". INT222 is ".$courses['INT222'];
echo "<br>";
echo"my name is ".$address["name"]." age is ".$address["age"];
echo "<br>";
?>

<!-- Printing array structure -->
<?php
$courses["INT220"] = "PHP";
$courses["INT221"] = "Laravel";
$courses["INT222"] = "Node js";

// *Printing array structure
print_r($courses); 
?>


<!-- for each -->
<?php
$courses = array("INT220"=>"PHP","INT221"=>"Laravel","INT222"=>"Node js");
foreach($courses as $course => $value) {
  echo "Key=".$course.","."Value=".$value;
  echo "<br>";
}
?>




<?php
//* <!-- for loop in assosiative array -->
$courses = array('INT220'=>'PHP','INT221'=>'Laravel','INT222'=>'Node js'); 
$keys = array_keys($courses);
$values = array_values($courses);
for($x=0; $x<count($courses); $x++) {
 echo "Key=".$keys[$x].','."Value=".$values[$x]. "<br>";
}
?>


<!-- multidimensional array -->

<?php
$result = array(
    array("Manoj",7.8,"pass"),
    array("Aditya",8.5,"pass"),
    array("Anuj",4.9,"fail")
);
echo $result[0][0]. "----CGPA is: " . $result[0][1]." and his status is ".$result[0][2]."<br>";
echo $result[1][0]. "----CGPA is: " . $result[1][1]." and his status is ".$result[1][2]."<br>";
echo $result[2][0]. "----CGPA is: "  . $result[2][1]." and his status is ".$result[2][2];
echo "<br>";
?>



<?php
// *2d array pehle index aur dusra key
$result = array(
    array(
        "name" => "Manoj",
        "cgpa" => 7.8,
        "status" => "pass"
    ),
    array(
        "name" => "Aditya",
        "cgpa" => 8.5,
        "status" => "pass"
    ),
    array(
        "name" => "Anuj",
        "cgpa" => 4.9,
        "status" => "fail"
    )
);
echo $result[0]["name"]. "----CGPA is: " . $result[0]["cgpa"]." and his status is ".$result[0]["status"]."<br>";
echo $result[1]["name"]. "----CGPA is: " . $result[1]["cgpa"]." and his status is ".$result[1]["status"]."<br>";
echo $result[2]["name"]. "----CGPA is: "  . $result[2]["cgpa"]." and his status is ".$result[2]["status"];
?>



<?php
//*for loop in 2d array

$result = array (
  array("Manoj",7.8,"pass"),
  array("Aditya",8.5,"pass"),
  array("Anuj",4.9,"fail")

);
    
for ($row = 0; $row < 3; $row++) {
  echo "<h4>Row number $row</h4>";
  for ($col = 0; $col < 3; $col++) {
    echo $result[$row][$col]."<br>";
  }
}
?>


<?php
//*foreach loop in 2d array
$result = array (
 array("Manoj",7.8,"pass"),
 array("Aditya",8.5,"pass"),
 array("Anuj",4.9,"fail")
);
for($row = 0; $row < 3; $row++) {
     echo "<h4>Row number $row</h4>";
 
 foreach ($result[$row] as $resul) {
 echo $resul."<br>";
 }
 }
?>

<?php
//*foreach loop in 2d array
$books = 
array("C++" => array("name" => "Beginning with C","copies" =>8),
      "PHP" => array("name" => "Basics of PHP","copies" => 10),
      "Laravel" => array("name" => "MVC","copies" => 3)
);
 
$keys = array_keys($books);
for($i = 0; $i < count($books); $i++) {
    echo "<h1>$keys[$i]</h1>";
    foreach($books[$keys[$i]] as $key => $value) {
        echo $key . " = " . $value . "<br>";
    }
}
?>








