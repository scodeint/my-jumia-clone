import React from 'react';
import "../Style/Categories.css";

function Categories({image, title}) {
  return (
    <div className='categories'>
       <img src={image} alt='' />
      <p>{title}</p>
    </div>
  )
}

export default Categories
