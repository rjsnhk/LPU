import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';
import ProductReviews from './components/ProductReviews';

const App = () => {
  const products = [
    { id: 1, name: 'Paneer', price: 100, review: 'good' },
    { id: 2, name: 'Chicken', price: 200, review: 'average' },
    { id: 3, name: 'Water', price: 300, review: 'bad' },
    { id: 4, name: 'Milk', price: 400, review: 'excellent' },
    { id: 5, name: 'Eggs', price: 500, review: 'poor' },
  ];

  const reviews = [
    { productId: 1, reviewer: 'Rajesh', comment: 'Amazing quality!' },
    { productId: 2, reviewer: 'Ram', comment: 'Loved it!' },
    { productId: 3, reviewer: 'Hari', comment: 'Could be better.' },
    { productId: 4, reviewer: 'Dipti', comment: 'Not impressed.' },
    { productId: 5, reviewer: 'Bikash', comment: 'Great product.' },

  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />

        <Route
          path="/products/:id"
          element={<ProductDetails products={products} />}
        />

        <Route
          path="/products/:id/reviews"
          element={<ProductReviews reviews={reviews} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
