import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetails = ({ products }) => {
  const { id } = useParams();
  const selectedId = parseInt(id, 10);

  const product = products.find((p) => p.id === selectedId);

 

  return (
    product && <div>
       <h1>PRODUCT DETAILS</h1>
      <h2>{product.name}</h2>
      <p>Price: RS {product.price}</p>
      <p>Review: {product.review}</p>
      <Link to={`/products/${selectedId}/reviews`}>View Product Reviews</Link>
    </div>
  );
};

export default ProductDetails;
