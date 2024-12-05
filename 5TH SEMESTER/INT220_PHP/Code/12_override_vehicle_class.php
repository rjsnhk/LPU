<?php
class Vehical {
    public $brand;
    public $model;

    public function __construct($brand, $model) {
        $this->brand = $brand;
        $this->model = $model;
    }

    public function describe() {
        return "This vehicle is a " . $this->brand . " " . $this->model . ".";
    }
}

// Child class
class Car extends Vehical {
    public $doors;

    public function __construct($brand, $model, $doors) {
        parent::__construct($brand, $model); // Call the parent constructor
        $this->doors = $doors; // Set the number of doors
    }

    public function describe() {
        return parent::describe() . " It has " . $this->doors . " doors.";
    }
}

$vehicle=new Vehical("Honda","civic");
echo $vehicle->describe()."<br>";

// Example usage:
$myCar = new Car("Toyota", "Corolla", 4);
echo $myCar->describe(); // Output: This vehicle is a Toyota Corolla. It has 4 doors.
?>