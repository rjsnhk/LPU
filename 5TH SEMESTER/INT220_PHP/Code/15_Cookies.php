<!-- <?php
setcookie("username", "John Carter", time() + 86400*30, "/");
if (isset($_COOKIE["username"])) {
    echo "Hello, " . $_COOKIE["username"];
} else {
    echo "Cookie is not set!";
}
?> -->


<!-- <?php
setcookie("testCookie", "John Carter", time() + 86400*30, "/");
if (isset($_COOKIE['testCookie'])) {
  echo "Cookie testCookie is set.";
} else {
  echo "Cookie testCookie is not set.";
}
?> -->



<!-- delete -->

<!-- <?php
setcookie("testCookie", "", time() - 3600, "/");
if (!isset($_COOKIE['testCookie'])) { 
    echo "Cookie deleted."; 
   } else { 
    echo "Cookie still exists."; }
    ?> -->


<!-- multiple -->
<?php
setcookie("theme", "dark", time() + 3600, "/");
setcookie("language", "en", time() + 3600, "/");
echo "Theme: " . $_COOKIE['theme'] . "<br>Language: " . $_COOKIE['language'];
?>


