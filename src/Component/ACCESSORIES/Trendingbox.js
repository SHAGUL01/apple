import React from 'react';

import "./Trendingbox.css";


const Trendingbox = ({img,name,new_price,old_price}) => {
  return (
    
    <div className="card trendingcard">
        <img src={img} className="card-img-top" alt="Temp"/>
        <div className="card-body trendingcard__text">
            <h5 className="card-title">{name}</h5>
            <div className="trendingcard__rs">
              <p className="card-text">{new_price}</p>
              <p className="card-text trendingcard__rs2">{old_price}</p>
            </div>
            <a href="#"  className="btn">Buy now</a>
            <a href="#" className="btn">Add to cart</a>
        </div>
    </div>
  )
}

export default Trendingbox;