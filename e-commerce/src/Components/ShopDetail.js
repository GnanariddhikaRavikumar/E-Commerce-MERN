import React from 'react';
import { useParams } from 'react-router-dom';
import shopdata from '../Common/MockData';
const ShopDetail = () => {
const { id } = useParams(); // Get the shop ID from the URL parameters
const shopDetails = shopdata.find((shop) => shop.id === parseInt(id, 10));

  return (
    <div>
      <h2>{shopDetails.id}</h2>
      <h1>{shopDetails.name}</h1>
      <p>{shopDetails.price}</p>
    </div>
  );
};

export default ShopDetail;
