<!-- <?php
setcookie("testCookie","Raj",time()+86400*30,"/");

if(isset($_COOKIE["testCookie"])){
  echo $_COOKIE["testCookie"];
}

?> -->


<?php
// Set a cookie named "testCookie" with the value "Raj" that expires in 30 days
setcookie("testCookie", "Raj", time() + (86400 * 30), "/");

// Check if the cookie "testCookie" is set
if (isset($_COOKIE["testCookie"])) {
    // Output the value of the cookie
    echo "Cookie Value: " . $_COOKIE["testCookie"];
} else {
    // If the cookie is not set, display a message
    echo "Cookie is not set.";
}
?>
