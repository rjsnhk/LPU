<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get the name and email from the POST data
    $name = $_POST['name'];
    $email = $_POST['email'];

    // Display the data
    echo "Name: " . htmlspecialchars($name) . "<br>";
    echo "Email: " . htmlspecialchars($email) . "<br>";
}
?>
