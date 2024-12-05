<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "StudentInfo";

// Connect to MySQL server
$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create the database if it doesn't exist
$spl = "CREATE DATABASE IF NOT EXISTS $dbname";
if (mysqli_query($conn, $spl)) {
    echo "Database '$dbname' created successfully or already exists.<br>";
} else {
    echo "Error creating database: " . mysqli_error($conn) . "<br>";
}

// Select the database
mysqli_select_db($conn, $dbname);

// Create `student` table if it doesn't exist
$tableQuery = "CREATE TABLE IF NOT EXISTS student (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    age INT(3) NOT NULL,
    password VARCHAR(255) NOT NULL
)";
mysqli_query($conn, $tableQuery);

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $age = (int)$_POST['age'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Hash password for security

    // Insert data into `student` table
    $insertQuery = "INSERT INTO student (name, email, age, password) VALUES ('$name', '$email', $age, '$password')";
    if (mysqli_query($conn, $insertQuery)) {
        echo "Data inserted successfully.<br>";
    } else {
        echo "Error inserting data: " . mysqli_error($conn) . "<br>";
    }
}
?>

<!-- HTML Form for user input -->
<!DOCTYPE html>
<html>
<head>
    <title>Student Registration</title>
</head>
<body>
    <h2>Student Registration Form</h2>
    <form method="post" action="">
        Name: <input type="text" name="name" required><br><br>
        Email: <input type="email" name="email" required><br><br>
        Age: <input type="number" name="age" required><br><br>
        Password: <input type="password" name="password" required><br><br>
        <input type="submit" value="Submit">
    </form>

    <h3>Registered Students:</h3>

    <?php
    // Display all records from `student` table
    $selectQuery = "SELECT * FROM student";
    $result = mysqli_query($conn, $selectQuery);

    if (mysqli_num_rows($result) > 0) {
        echo "<table border='1'><tr><th>ID</th><th>Name</th><th>Email</th><th>Age</th></tr>";
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<tr><td>" . $row["id"] . "</td><td>" . $row["name"] . "</td><td>" . $row["email"] . "</td><td>" . $row["age"] . "</td></tr>";
        }
        echo "</table>";
    } else {
        echo "No records found.";
    }

    // Close the connection
    mysqli_close($conn);
    ?>
</body>
</html>
