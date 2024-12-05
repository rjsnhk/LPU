<?php
// PHP program to convert a decimal
// number to binary number

// function to convert
// decimal to binary
function decToBinary($n)
{
    // array to store
    // binary number
    $binaryNum;

    // counter for binary array
    $i = 0;
    while ($n > 0) 
    {

        // storing remainder
        // in binary array
        $binaryNum[$i] = $n % 2;
        $n = (int)($n / 2);
        $i++;
    }

    // printing binary array
    // in reverse order
    for ($j = $i - 1; $j >= 0; $j--)
        echo $binaryNum[$j];
}

// Driver Code
$n = 17;
decToBinary($n);

// This code is contributed by m_kit
?>
