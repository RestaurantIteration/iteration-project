import React from 'react';

//deconstruct passed down info prop
const RestaurantCard = ({ info }) => {
  const {name, ambience, cuisine, price_tier, plant_based, location_radius, good_for_groups} = info;

  return (
    <div className='resCard'>
      <h1>{name}</h1>
      <h2>Cuisine: {cuisine}</h2>
      <p><strong>Price Tier:</strong> {price_tier}</p>
      <p><strong>Ambience:</strong> {ambience}</p>
      <p><strong>Plant-Based?</strong> {plant_based === '0' ? 'no' : 'yes'}</p>
      <p><strong>Location Radius:</strong> {location_radius} km</p>
      <p><strong>Good for Groups?</strong> {good_for_groups === '0' ? 'no' : 'yes'}</p>
      {/* <p>Nathan's Mom approves? yes</p> */}
    </div>
  );
};

export default RestaurantCard;
