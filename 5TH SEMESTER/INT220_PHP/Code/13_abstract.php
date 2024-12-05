<?php

abstract class Animal {
    protected $name;

    public function __construct($name) {
        $this->name = $name;
    }

    abstract public function makeSound();

    public function describe() {
        return "This is a {$this->name}.<br>";
    }
}

// Concrete subclass for Dog
class Dog extends Animal {
    public function makeSound() {
        return "Woof! Woof!";
    }
}

// Concrete subclass for Cat
class Cat extends Animal {
    public function makeSound() {
        return "Meow!";
    }
}

// Example usage
$dog = new Dog("Dog");
echo $dog->describe(); // Output: This is a Dog.
echo $dog->makeSound(); // Output: Woof! Woof!

$cat = new Cat("Cat");
echo $cat->describe(); // Output: This is a Cat.
echo $cat->makeSound(); // Output: Meow!
?>