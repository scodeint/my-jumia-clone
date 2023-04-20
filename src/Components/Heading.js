import React from 'react'
import "../Style/Heading.css";

function Heading({heading}) {
    return (
        <div className="heading">
          <h5>{heading}</h5>
        </div>
      );
}

export default Heading
