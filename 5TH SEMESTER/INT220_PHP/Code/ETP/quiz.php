<?php
$questions = [
    "What is the capital of India ?" => ["A" => "Delhi", "B" => "Goa", "C" => "Gujrat", "D" => "Mumbai"],
    "Who is prime minister of india ?" => ["A" => "Mamata Banarjee", "B" => "Narendra Modi", "C" => "Naveen Patanaik", "D" => "Rajesh Nahak"],
    "In which state are you live in now ?" => ["A" => "Odisha", "B" => "Punjab", "C" => "Himachal Pradesh", "D" => "Assam"],
    "Who is the father of nation ?" => ["A" => "Jawaharlal Neheru ", "B" => "Mahatma Gandhi", "C" => "Subash Chandra Bose", "D" => "Asha Bhosle"],
    "Who is the the first prime minister of india ?" => ["A" => "Jawaharlal Neheru", "B" => "Goldi Smith", "C" => "Barak Obama", "D" => "Narendra Modi"]
];

$allAns = ["A", "B", "B", "B", "A"];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $useAns = $_POST['answers'];
    $count = 0;

    foreach ($allAns as $index => $corrAns) {
        if (isset($useAns[$index]) && $useAns[$index] === $corrAns) {
      $count++;
        }
    }

    echo "<h1>Quiz Results</h1>";
    if($count>2){
    echo "Congratulation You have Passed The Exam";
    echo "<br>";
    echo "<p>Your score: $count / " . count($questions) . "</p>";
    echo "<br>";
    echo "<a href='quiz.php'>Take the Quiz Again</a>";
    }else{
      echo "OOPS !! You Are Failed !! Best Of Luck For Future";
    echo "<br>";
    echo "<p>Your score: $count / " . count($questions) . "</p>";
    echo "<br>";
    echo "<a href='quiz.php'>TrY Again</a>";
    }
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Online Quiz</title>
</head>
<body>
    <h1>Online Quiz System</h1>
    <p>Note: You have 5 multiple Choice Question so choose the correct answer . each question have One Marks each. No negative Marks .</p>
    <form method="POST" action="quiz.php">
        <?php
        $i = 0;
        foreach ($questions as $question => $options) {
            echo "<h3>Q " . ($i + 1) . ": $question</h3>";
            foreach ($options as $key => $value) {
                
                echo "<input type='radio' name='answers[$i]' value='$key' required> $key: $value";
                echo "<br>";
            }
            $i++;
        }
        ?>
        <br>
        <button type="submit">Submit Quiz</button>
    </form>
</body>
</html>
