<?php

include('database.php');

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="<?php htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="post">
<h2>Welcome to our website</h2>
<input type="text" name="username" placeholder="Username">
<input type="password" name="password" placeholder="Password">
<input type="submit" value="Submit">

  </form>
</body>
</html>

<?php
if($_SERVER["REQUEST_METHOD"] == "POST"){
    $username = filter_input(INPUT_POST, 'username', FILTER_SANITIZE_STRING);
    $password = filter_input(INPUT_POST, 'password', FILTER_SANITIZE_STRING);

    if(empty($username) || empty($password)){
        echo "Please enter username and password";
    }else{
      $hash=password_hash($password,PASSWORD_DEFAULT);
      $sql = "INSERT INTO users (username, password) VALUES ('$username', '$hash')";

      try {
        mysqli_query($conn, $sql);
        echo "New record created successfully";
      } catch(mysqli_sql_exception) {
        echo "that username already exists";
      }
    }

    
}

?>