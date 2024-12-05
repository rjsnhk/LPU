import React from 'react'

function ProductDisplay(props) {
  const{productList,totalAmount}=props;
  return (
    <div>
      <div>
      <h1>Product List</h1>
      <ul>
        {productList.map((product) => (
          <div><li>
          <p key={product.name} style={{fontWeight:'bold'}}>
            {product.name}</p>
            <p>Price - $ {product.price}</p>
          
          <p>{product.details}</p>

          </li>
          </div>

        ))}
      </ul>
    </div>
    <h2>Total Amount: {totalAmount}</h2>
    </div>
  )
}

export default ProductDisplay
