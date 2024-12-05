import React from "react";

const BlinkitHomePage = () => {
  // Product Data
  const products = [
    { name: "Broccoli", category: "Vegetable", price: 2 },
    { name: "Apple", category: "Fruit", price: 3 },
    { name: "Chicken", category: "Meat", price: 5 },
  ];

  // Product categories
  const categories = ["Vegetable", "Fruit", "Meat"];

  // Button click handler
  const handleClick = () => {
    alert("Button clicked! Thanks for visiting Blinkit.");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Blinkit Online Grocery</h1>
      
      <h2>Product Categories</h2>
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>

      <h2>Available Products</h2>
      <table border="1" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price ($)</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>{product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button
        onClick={handleClick}
        style={{
         
          padding: "10px 20px",
          backgroundColor: "#4CAF50",
          
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default BlinkitHomePage;
