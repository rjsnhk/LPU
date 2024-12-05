<?php 

echo" QUESTION NUM 1";
echo "<br>";

$str = "mississippi";
$mc = 0;
$ic = 0;
$sc = 0;
$pc = 0;

foreach (str_split($str) as $a) {
    if ($a == "m") $mc++;
    else if ($a == "i") $ic++;
    else if ($a == "s") $sc++;
    else if ($a == "p") $pc++;
}

echo "'m' appears " . $mc . " times. <br>";
echo "'i' appears " . $ic . " times. <br>";
echo "'s' appears " . $sc . " times. <br>";
echo "'p' appears " . $pc . " times. <br>";

?>

<?php
echo "<br>";
echo" QUESTION NUM 2";
echo "<br>";
for($i=0;$i<9;$i++){
  if($i==0||$i==8){
    for($j=0;$j<9;$j++){
      echo"*";
    }
    echo"<br>";
  }
  else if($i==1||$i==7){
    for($j=0;$j<9;$j++){
      if($j==4)
      echo"&nbsp";
    else echo"*";
    }
    echo"<br>";
  }
  else if($i==2||$i==6){
    for($j=0;$j<9;$j++){
      if($j==4||$j==3||$j==5)
      echo"&nbsp";
    else echo"*";
    }
    echo"<br>";
  }
  else if($i==3||$i==5){
    for($j=0;$j<9;$j++){
      if($j==0||$j==1||$j==7||$j==8)
      echo"*";
    else echo"&nbsp";
    }
    echo"<br>";
  }
  else if($i==4){
    for($j=0;$j<9;$j++){
if($j==0||$j==8) echo"*";
else echo"&nbsp";
    }
    echo"<br>";
  }
  
  
}



