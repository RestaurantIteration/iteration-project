import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateRest } from '../features/restaurantsSlice';
import RestaurantCard from '../components/RestaurantCard.jsx';
//import that slice of state here

const RestaurantDisplay = () => {
  //get the updated array of Restaurants from state
  const restaurant = useSelector((state) => state.restaurants.restList);
  // here can we initialize restaurant to get request to all restaurants?
  const dispatch = useDispatch();
  // do a get request to all of our restaurants

  const fetchRestaurants = async () => {
    try {
      const backendUrl = 'http://localhost:3000/restaurants';
      const jsonData = await fetch(backendUrl);
      const restaurantData = await jsonData.json();
      dispatch(updateRest(restaurantData));
    } catch (err) {
      console.log(`There was an error fetching restaurant data: ${err}`);
    }
  };


  // fetchRestaurants();
  useEffect(() => {
    fetchRestaurants();
  }, [])

  // grab that data --> array of objects

  // invoke updateRest to update our restaurant state

  // restaurant
  //create an array to store all of the different RestaurantCards
  const displayArray = [];

  //iterate through the array of Restaurant objects
  restaurant.forEach((el, index) => {
    displayArray.push(<RestaurantCard key={index} info={el} />);
  });
  //create an instance of Restaurant Card for each object
  //pass the object down as a prop

  return <div className='resDisplay'>{displayArray}</div>;
};

export default RestaurantDisplay;
