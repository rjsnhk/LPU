<?php
// Start the session
session_start();

// Set session variables
$_SESSION['username'] = 'JohnDoe';
$_SESSION['role'] = 'admin';

// Display the session variables
echo "Username: " . $_SESSION['username'] . "<br>";
echo "Role: " . $_SESSION['role'] . "<br>";

// To destroy the session and all session data
session_destroy();

// Check if session variables are unset after destroying the session
if (empty($_SESSION['username']) && empty($_SESSION['role'])) {
    echo "Session has been destroyed.";
} else {
    echo "Session variables are still set.";
}
?>
