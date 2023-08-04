import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import RestaurantCard from '../components/RestaurantCard.jsx';
import {
  updateRest,
  resetOffset,
  getNext,
  setStatus,
} from '../slices/restaurantsSlice';
import { moveCenter } from '../slices/googleSlice';
import { useLoaderData } from 'react-router-dom';

export async function loader({ params }) {
  try {
    const backendUrl = 'http://localhost:3000/api/';
    const jsonData = await fetch(backendUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/JSON',
        Accept: 'application/json',
      },
      body: JSON.stringify({ location: params.location }),
    });
    const results = await jsonData.json();

    return results;
  } catch (err) {
    console.log(`There was an error fetching restaurant data: ${err}`);
    return err;
  }
}

export default function RestaurantDisplay() {
  const restaurant = useSelector((state) => state.restaurants.restList);
  const status = useSelector((state) => state.restaurants.status);
  const dispatch = useDispatch();

  const results = useLoaderData();
  useEffect(() => {
    if (results) {
      const ele = document.querySelector('.resDisplay');
      if (ele) ele.scrollTop = 0;

      const newCenter = {
        lat: results.region.center.latitude,
        lng: results.region.center.longitude,
      };

      dispatch(resetOffset());
      dispatch(updateRest(results.businesses));
      dispatch(moveCenter(newCenter));
      dispatch(setStatus('succeeded'));
    }
  });

  const handleScroll = (e) => {
    const scrollHeight = e.currentTarget.scrollHeight;
    const scrollTop = e.currentTarget.scrollTop;
    if (status === 'succeeded' && scrollTop >= scrollHeight - 2000) {
      dispatch(getNext());
    }
  };

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
