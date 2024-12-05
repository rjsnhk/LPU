import React from 'react';
import { Link } from 'react-router-dom';

const ProductList = (props) => {
  const { products } = props;
  return (
    <div>
      <h1>PRODUCT LIST : </h1>
      <ul>
        {products.map((prod) => (
          <li key={prod.id}>
            <Link to={`/products/${prod.id}`}>
              <h2>{prod.name}</h2>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;


