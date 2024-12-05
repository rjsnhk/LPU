<?php

// Base class
class Person {
    protected $name;
    protected $age;

    public function __construct($name, $age) {
        $this->name = $name;
        $this->age = $age;
    }

    public function introduce() {
        return "Hello, my name is {$this->name} and I am {$this->age} years old.";
    }
}

// Derived class
class Employee extends Person {
    private $jobTitle;

    public function __construct($name, $age, $jobTitle) {
        parent::__construct($name, $age); // Call the parent constructor
        $this->jobTitle = $jobTitle;
    }

    public function introduce() {
        // Call the parent introduce method and add job title
        return parent::introduce() . " I work as a {$this->jobTitle}.";
    }
}

// Example usage
$person = new Person("Alice", 30);
echo $person->introduce(); // Output: Hello, my name is Alice and I am 30 years old.

echo "<br>";

$employee = new Employee("Bob", 25, "Software Developer");
echo $employee->introduce(); // Output: Hello, my name is Bob and I am 25 years old. I work as a Software Developer.
?>