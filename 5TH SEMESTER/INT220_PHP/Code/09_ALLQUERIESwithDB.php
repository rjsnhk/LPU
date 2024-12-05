<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "biku";

// Connect to MySQL server
$conn = mysqli_connect($servername, $username, $password);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Create database if it doesn't exist
$sql = "CREATE DATABASE IF NOT EXISTS $dbname";
mysqli_query($conn, $sql);

// Select the database
mysqli_select_db($conn, $dbname);

// Create a table if it doesn't exist
$tableName = "users";
$tableQuery = "CREATE TABLE IF NOT EXISTS $tableName (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    age INT(3) NOT NULL
)";

if (mysqli_query($conn, $tableQuery)) {
    echo "Table '$tableName' created successfully.<br>";
} else {
    echo "Error creating table: " . mysqli_error($conn) . "<br>";
}

// Insert data into the table
$insertQuery = "INSERT INTO $tableName (name, email, salary, age) VALUES 
    ('Alice', 'alice@example.com',100000.00, 25),
    ('Bob', 'bob@example.com',20000.54, 30),
    ('Charlie', 'charlie@example.com',52111.1, 28)";

if (mysqli_query($conn, $insertQuery)) {
    echo "Data inserted successfully.<br>";
} else {
    echo "Error inserting data: " . mysqli_error($conn) . "<br>";
}



// Select data with WHERE clause
$whereQuery = "SELECT * FROM users WHERE age > 25";
$result = mysqli_query($conn, $whereQuery);

echo "<h3>Records where age is greater than 25:</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Salary: " . $row["salary"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// Select data with LIKE clause
$likeQuery = "SELECT * FROM users WHERE name LIKE 'A%'";
$result = mysqli_query($conn, $likeQuery);

echo "<h3>Records where name starts with 'A':</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Salary: " . $row["salary"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// Select data with AND clause
$andQuery = "SELECT * FROM users WHERE age > 25 AND salary > 50000";
$result = mysqli_query($conn, $andQuery);

echo "<h3>Records where age is greater than 25 and salary is greater than 50000:</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Salary: " . $row["salary"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// Select data with OR clause
$orQuery = "SELECT * FROM users WHERE age < 30 OR salary < 60000";
$result = mysqli_query($conn, $orQuery);

echo "<h3>Records where age is less than 30 or salary is less than 60000:</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Salary: " . $row["salary"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// ORDER BY clause: Sorting records by salary in descending order
$orderByQuery = "SELECT * FROM users ORDER BY salary DESC";
$result = mysqli_query($conn, $orderByQuery);

echo "<h3>Records ordered by salary (highest to lowest):</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "ID: " . $row["id"] . " - Name: " . $row["name"] . " - Email: " . $row["email"] . " - Salary: " . $row["salary"] . " - Age: " . $row["age"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// GROUP BY clause: Grouping records by age and counting the number of users per age group
$groupByQuery = "SELECT age, COUNT(*) as user_count FROM users GROUP BY age";
$result = mysqli_query($conn, $groupByQuery);

echo "<h3>Number of users in each age group:</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Age: " . $row["age"] . " - User Count: " . $row["user_count"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}

// HAVING clause: Filtering groups where the number of users in each age group is more than 1
$havingQuery = "SELECT age, COUNT(*) as user_count FROM users GROUP BY age HAVING user_count > 1";
$result = mysqli_query($conn, $havingQuery);

echo "<h3>Age groups with more than one user:</h3>";
if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "Age: " . $row["age"] . " - User Count: " . $row["user_count"] . "<br>";
    }
} else {
    echo "No results found.<br>";
}



// Close the connection
mysqli_close($conn);
?>
