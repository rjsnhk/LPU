<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="index.php" method="post">
    <input type="text" name="name" placeholder="Enter your name">
    <br>
    <input type="email" name="email" placeholder="Enter your email">
    <br>
    <input type="password" name="password" id="" re>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>
<?php
if (isset($_POST['submit'])) {

  if(!empty($_POST['name']) && !empty($_POST['email']) && !empty($_POST['password'])) {

  $_SESSION['name'] = $_POST['name'];
  $_SESSION['email'] = $_POST['email'];
  $_SESSION['password'] = $_POST['password'];

  header("Location: home.php");
  
  
}
else{
  echo "Please fill in all fields";
}
}
?>