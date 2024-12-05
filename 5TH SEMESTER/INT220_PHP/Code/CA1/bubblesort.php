<?php
// Bubble Sort function
function bubbleSort(&$arr) {
    $n = count($arr);

    // Outer loop to traverse through all elements
    for ($i = 0; $i < $n; $i++) {

        // Inner loop to compare adjacent elements
        for ($j = $i+1; $j < $n; $j++) {
            if ($arr[$i] > $arr[$j]) {
                // Swap arr[j] and arr[j + 1]
                $temp = $arr[$i];
                $arr[$i] = $arr[$j];
                $arr[$j] = $temp;
            }
        }
    }
}

// Function to print the array
function printArray($arr) {
    foreach ($arr as $value) {
        echo $value . " ";
    }
    echo "<br>";
}

// Example usage
$arr = array(64, 34, 25, 12, 22, 11, 90);

echo "Original Array:<br>";
printArray($arr);

bubbleSort($arr);

echo "Sorted Array:<br>";
printArray($arr);
?>
