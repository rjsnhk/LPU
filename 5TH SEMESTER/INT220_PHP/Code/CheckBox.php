<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Food Selection</title>
</head>
<body>
  <form action="CheckBox.php" method="post">
    <h3>Select Your Favorite Foods:</h3>
    <input type="checkbox" name="food[]" value="Pizza"> Pizza<br>
    <input type="checkbox" name="food[]" value="Burger"> Burger<br>
    <input type="checkbox" name="food[]" value="Pasta"> Pasta<br>
    <input type="checkbox" name="food[]" value="Sushi"> Sushi<br>
    <input type="checkbox" name="food[]" value="Salad"> Salad<br>
    <input type="submit" name="submit" value="Submit">
  </form>
</body>
</html>

<?php
if (isset($_POST['submit'])) {
    if (isset($_POST['food']) && is_array($_POST['food'])) {
        echo "<h3>You selected:</h3>";
        foreach ($_POST['food'] as $food) {
            echo htmlspecialchars($food) . "<br>";
        }
    } else {
        echo "<h3>No food selected</h3>";
    }
}
?>
