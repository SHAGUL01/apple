import React from 'react';
import Kids_product from './Accessories';
import Trendingbox from './Trendingbox';


const Accessories = () => {
  return (
    <div className="container_row">
      {
        Kids_product.map((product,index) => (
          <Trendingbox key={index} img={product.img} name={product.name} new_price={product.new_price} old_price={product.old_price} />
        ))
      }
    </div>
  )
}

export default Accessories;