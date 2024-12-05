<!-- <?php
// Start a new session
  session_start();  
  $_SESSION['username'] = 'JohnDoe';

  echo "Username: " . $_SESSION['username'];  // Output: JohnDoe
?> -->



<!-- <?php
// Set session variables
session_start();
$_SESSION['userID'] = 1001;
$_SESSION['cart'] = array("item1" => "Laptop", "item2" => "Mouse");


  unset($_SESSION['cart']);  // Remove the 'cart' session variable
?> -->


<!-- <?php
session_start();
$_SESSION['username'] = 'JohnDoe';
$_SESSION['role'] = 'Admin';

session_unset(); // Removes all session variables

// Output
echo isset($_SESSION['username']) ? $_SESSION['username'] : "Session variable 'username' is not set."; 
// Output: Session variable 'username' is not set.
?> -->



<!-- <?php
session_start();
$_SESSION['username'] = 'JohnDoe';
$_SESSION['role'] = 'Admin';

session_destroy(); // Terminates the entire session

// Output
echo isset($_SESSION['username']) ? $_SESSION['username'] : "Session variable 'username' is not set."; 
// Output: Session variable 'username' is not set.
echo $_SESSION[‘role’];
?> -->
