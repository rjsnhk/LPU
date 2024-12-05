<?php

class Book{
  public $title;
  public $author;
  public $pages;


  public function __construct($title, $author, $pages){ //double underscore he
    $this->title = $title;
    $this->author = $author;
    $this->pages = $pages;
  }

  public function info(){
    echo "The book <b>$this->title</b> <br> is written by $this->author <br> and has $this->pages pages.";
  }


}
// $bookcheck = new Book();
// $bookcheck->info();
// echo "<br>";

$book1 = new Book("Harry Potter", "JK Rowling", 400, 19.99);
$book2 = new Book("Lord of the Rings", "Tolkien", 700, 29.99);

$book1->info();
echo "<br> Another Book: <br>";
$book2->info(); 

?>