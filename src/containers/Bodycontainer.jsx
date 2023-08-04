import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantQuery from '../components/RestaurantQuery';

const Restaurantmapcontainer = () => {
  return (
    <div className='app'>
      <RestaurantQuery />
      <div id='bodycontainer'>
        <Outlet />
        <Mapcontainer />
      </div>
    </div>
  );
};

export default Restaurantmapcontainer;
