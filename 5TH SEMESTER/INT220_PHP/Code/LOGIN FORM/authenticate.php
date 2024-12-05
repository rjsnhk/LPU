<?php
session_start();

// Dummy credentials for demonstration purposes
$valid_username = 'user123';
$valid_password = 'password123';

// Get the form data
$username = $_POST['username'];
$password = $_POST['password'];

// Check if the entered username and password are correct
if ($username === $valid_username && $password === $valid_password) {
    // If correct, store username in session and redirect to the welcome page
    $_SESSION['username'] = $username;
    header('Location: welcome.php');
    exit();
} else {
    // If incorrect, display an error message
    echo '<p>Invalid username or password. Please try again.</p>';
    echo '<a href="login.php">Go back to login</a>';
}
?>
