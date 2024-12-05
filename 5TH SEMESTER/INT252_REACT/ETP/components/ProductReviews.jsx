import React from 'react';
import { useParams } from 'react-router-dom';

const ProductReviews = (props) => {
  const { reviews } = props;
  const { id } = useParams();
  const selectedId = parseInt(id, 10);

  const prodRev = reviews.filter((review) => review.productId === selectedId);

  

  return (
    prodRev && <div>
      <h1>PRODUCT REVIEWS : </h1>
      <ul>
        {prodRev.map((review, index) => (
          <li key={index}>
            <p><b>Reviewer:</b> {review.reviewer}</p>
            <p><b>Comment:</b> {review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductReviews;
