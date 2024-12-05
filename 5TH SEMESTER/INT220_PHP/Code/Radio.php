<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="Radio.php" method="post">
    <input type="radio" name="gender" value="male"> Male
    <input type="radio" name="gender" value="female"> Female
    <input type="radio" name="gender" value="other"> Other
    <input type="submit"name="submit" value="Submit">
  </form>
</body>
</html>

<?php
if (isset($_POST['submit'])) {
  $gender = null;
    if (isset($_POST['gender'])) {
        $gender = $_POST['gender'];
        echo "Selected gender: " . $gender;
    } else {
        echo "No gender selected";
    }
}
?>
