<?php
// User-defined function to reverse a string
function reverseString($str) {
    $reversed = '';  // Initialize an empty string to store the reversed version
    $length = strlen($str);  // Get the length of the string
    
    // Loop through the string from the end to the beginning
    for ($i = $length - 1; $i >= 0; $i--) {
        $reversed .= $str[$i];  // Append each character to the reversed string
    }
    
    return $reversed;  // Return the reversed string
}

// Example usage
$originalString = "Hello, World!";
$reversedString = reverseString($originalString);

echo "Original String: " . $originalString . "\n";
echo "Reversed String: " . $reversedString . "\n";
?>
