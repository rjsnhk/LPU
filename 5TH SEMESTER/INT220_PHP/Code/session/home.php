<?php
session_start();
?>
<?php


echo "Username: " . $_SESSION['name'] . "<br>";
echo "Password: " . $_SESSION['email'] . "<br>";


?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
<form action="home.php" method="post"><input type="submit" name="logout" value="Logout"></form>
</body>
</html>

<?php

if (isset($_POST['logout'])) {
    session_destroy();
    header("Location: index.php");
   
}

?>