import React from 'react';
import "../Style/Product.css";

function Product({title, image, price}) {
  return (
    <div className='product'>
      <img src={image} alt='' />
      <p>{title}</p>
      <p> &#8358; {price}</p>
    </div>
  )
}

export default Product
