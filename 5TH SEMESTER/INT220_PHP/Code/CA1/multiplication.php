<?php
function matrixMultiplication($a, $b) {
    // Get the number of rows and columns for the matrices
    $rowsA = count($a);
    $colsA = count($a[0]);
    $rowsB = count($b);
    $colsB = count($b[0]);

    // Check if the number of columns in the first matrix equals the number of rows in the second matrix
    if ($colsA != $rowsB) {
        return "Matrix multiplication not possible. Number of columns in Matrix A must equal the number of rows in Matrix B.";
    }

    // Create a new matrix to store the result
    $c = array();

    // Initialize result matrix with 0s
    for ($i = 0; $i < $rowsA; $i++) {
        for ($j = 0; $j < $colsB; $j++) {
            $c[$i][$j] = 0;
        }
    }

    // Perform matrix multiplication
    for ($i = 0; $i < $rowsA; $i++) {
        for ($j = 0; $j < $colsB; $j++) {
            for ($k = 0; $k < $colsA; $k++) {
                $c[$i][$j] += $a[$i][$k] * $b[$k][$j];
            }
        }
    }

    // Return the resulting matrix
    return $c;
}

// Example usage
$a = array(
    array(1, 1, 1),
    array(2, 2, 2),
    array(3, 3, 3)
);

$b = array(
    array(1, 1),
    array(2, 2),
    array(3, 3)
);

$result = matrixMultiplication($a, $b);


    for ($i = 0; $i < count($result); $i++) {
        for ($j = 0; $j < count($result[0]); $j++) {
            echo $result[$i][$j] . " ";
        }
        echo "<br>";
    }

?>
