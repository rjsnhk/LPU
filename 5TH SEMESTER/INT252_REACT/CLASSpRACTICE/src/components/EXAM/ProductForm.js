import React, { useState } from 'react';
import ProductDisplay from './ProductDisplay';

function ProductForm() {
  const [product, setProduct] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({
    name: '',
    price: 0,
    details: '',
  });
  const [totalAmount, setAmount] = useState(0);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setCurrentProduct({
        name: value,
        price: currentProduct.price,
        details: currentProduct.details,
      });
    } else if (name === 'price') {
      setCurrentProduct({
        name: currentProduct.name,
        price: value,
        details: currentProduct.details,
      });
    } else if (name === 'details') {
      setCurrentProduct({
        name: currentProduct.name,
        price: currentProduct.price,
        details: value,
      });
    }
  };

  const addProduct = () => {
    const newProductList = product.concat([currentProduct]);
    setProduct(newProductList);

    setAmount(totalAmount + parseFloat(currentProduct.price));

    setCurrentProduct({ name: '', price: 0, details: '' });
  };

  return (
    <div>
      <h1>Product Form</h1>
      
      <label htmlFor="name">Product Name: </label>
      <input
        type="text"
        name="name"
        value={currentProduct.name}
        onChange={handleInputChange}
      />
      <br />
      
      <label htmlFor="price">Price: </label>
      <input
        type="number"
        name="price"
        value={currentProduct.price}
        onChange={handleInputChange}
      />
      <br />
      
      <label htmlFor="details">Description: </label>
      <input
        type="text"
        name='details'
        value={currentProduct.details}
        onChange={handleInputChange}
      />
      <br />
      
      <button onClick={addProduct}>Add Product</button>

      <ProductDisplay productList={product} totalAmount={totalAmount} />
    </div>
  );
}

export default ProductForm;

