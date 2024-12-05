<?php
// Function to calculate the HCF (Highest Common Factor) using Euclidean Algorithm
function calculateHCF($a, $b) {
    while ($b != 0) {
        $temp = $b;
        $b = $a % $b;
        $a = $temp;
    }
    return $a;
}

// Function to calculate the LCM (Lowest Common Multiple) using HCF
function calculateLCM($a, $b) {
    if ($a == 0 || $b == 0) {
        return 0; // LCM of 0 with any number is 0
    }
    return abs($a * $b) / calculateHCF($a, $b);
}

// Function to compute and print HCF and LCM of two numbers
function computeHCFAndLCM($num1, $num2) {
    $hcf = calculateHCF($num1, $num2);
    $lcm = calculateLCM($num1, $num2);

    echo "HCF of $num1 and $num2 is: $hcf\n";
    echo "LCM of $num1 and $num2 is: $lcm\n";
}

// Example usage
$num1 = 12;
$num2 = 18;

computeHCFAndLCM($num1, $num2);
?>
