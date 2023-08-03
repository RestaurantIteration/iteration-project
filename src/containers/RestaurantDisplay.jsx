import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard.jsx';
import {
  updateRest,
  setLocation,
  resetOffset,
  getNext,
} from '../slices/restaurantsSlice';
import { moveCenter } from '../slices/googleSlice';
//import that slice of state here

export async function loader({ params }) {
  try {
    const backendUrl = 'http://localhost:3000/';
    const jsonData = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Accept: 'application/json',
      },
      body: JSON.stringify({ location: params.location }),
    });
    const restaurantData = await jsonData.json();

    const ele = document.querySelector('.resDisplay');
    if (ele) ele.scrollTop = 0;

    const newCenter = {
      lat: restaurantData.region.center.latitude,
      lng: restaurantData.region.center.longitude,
    };
    dispatch(setLocation(params.location));
    // dispatch(resetOffset());
    dispatch(updateRest(restaurantData.businesses));
    dispatch(moveCenter(newCenter));
  } catch (err) {
    console.log(`There was an error fetching restaurant data: ${err}`);
  }
}

export default function RestaurantDisplay() {
  //get the updated array of Restaurants from state
  const restaurant = useSelector((state) => state.restaurants.restList);
  const status = useSelector((state) => state.restaurants.status);
  // here can we initialize restaurant to get request to all restaurants?
  const dispatch = useDispatch();
  // do a get request to all of our restaurants

  const handleScroll = (e) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const offsetHeight = e.currentTarget.offsetHeight;
    const scrollTop = e.currentTarget.scrollTop;
    console.log(scrollTop);
    console.log(scrollHeight);
    if (status === 'succeeded' && scrollTop >= scrollHeight - 2000) {
      dispatch(getNext());
    }
  };

  // grab that data --> array of objects

  // invoke updateRest to update our restaurant state

  // restaurant
  return (
    <div
      className='resDisplay'
      onScroll={handleScroll}
    >
      {restaurant.length ? (
        restaurant.map((el, index) => {
          return (
            <RestaurantCard
              key={el.id + index}
              info={el}
              restaurantId={el.id}
              address={el.location.display_address}
              phone={el.display_phone}
              transactions={el.transactions}
              categories={el.categories}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
}
