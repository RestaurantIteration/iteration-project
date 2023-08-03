import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import '../styles/main.scss';
import Mapcontainer from '../components/Map.jsx';
import RestaurantDisplay from './RestaurantDisplay.jsx';

const Restaurantmapcontainer = () => {
  return (
    <div id='bodycontainer'>
      <Outlet />
      <Mapcontainer />
    </div>
  );
};

export default Restaurantmapcontainer;
