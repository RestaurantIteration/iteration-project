import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateQuery } from '../features/querySlice';
import { updateRest } from '../features/restaurantsSlice';
//import wobbe from '../frontend/assets/logo.png';

const RestaurantQuery = () => {
  // create an action for one drop-down
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();

  /*
- query will include all of the query selectors we need to filter our restaurants
- get request to restaurants with the query parameters
- call updateRest and set to new list of restaurants

*/

  const fetchRestaurants = async () => {
    try {
      const backendUrl = 'http://localhost:3000/restaurants';
      const jsonData = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'Application/JSON',
        },
        body: JSON.stringify(query),
      });
      const restaurantData = await jsonData.json();
      dispatch(updateRest(restaurantData));
    } catch (err) {
      console.log(`There was an error fetching restaurant data: ${err}`);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, [query]);

  return (
    <div>
      <script
        async
        src='//embedr.flickr.com/assets/client-code.js'
        charset='utf-8'
      ></script>
      <form className='queryFormContainer'>
        <label id='nameLabel' htmlFor='restaurant'>
          Restaurant:
          <input
            placeholder='Restaurant Name...'
            name='restaurant'
            type='text'
            id='restaurantName'
            onChange={(e) => dispatch(updateQuery(['name', e.target.value]))}
          />
        </label>
        <label className='dropDownLabel' htmlFor='cuisine'>
          Cuisine:
          <select
            className='dropDown'
            name='cuisine'
            id='cuisineSelector'
            onChange={(e) => dispatch(updateQuery(['cuisine', e.target.value]))}
          >
            <option value=''>Select</option>
            <option value='Mexican'>Mexican</option>
            <option value='Indian'>Indian</option>
            <option value='American'>American</option>
            <option value='Italian'>Italian</option>
            <option value='Chinese'>Chinese</option>
            <option value='Korean'>Korean</option>
            <option value='Japanese'>Japanese</option>
          </select>
        </label>
        <label className='dropDownLabel' htmlFor='ambience'>
          Ambience:
          <select
            className='dropDown'
            name='ambience'
            id='ambienceSelector'
            onChange={(e) =>
              dispatch(updateQuery(['ambience', e.target.value]))
            }
          >
            <option value=''>Select</option>
            <option value='date night'>Date Night</option>
            <option value='trendy'>Trendy</option>
            <option value='litty'>Litty</option>
            <option value='friendly'>Friendly</option>
            <option value='country'>Country</option>
          </select>
        </label>
        <label className='dropDownLabel' htmlFor='price-tier'>
          Price-Tier:
          <select
            className='dropDown'
            name='price-tier'
            id='priceSelector'
            onChange={(e) =>
              dispatch(updateQuery(['price_tier', e.target.value]))
            }
          >
            <option value=''>select</option>
            <option value='exquisite'>Exquisite</option>
            <option value='splurge'>Splurge</option>
            <option value='affordable'>Affordable</option>
            <option value='thrifty'>Thrifty</option>
            <option value='dirt cheap'>Dirt Cheap</option>
          </select>
        </label>

        <label htmlFor='plantBase' className='dropDownLabel'>
          Vegetarian options?
          <select
            className='dropDown'
            name='plantBase'
            id='plantBase'
            onChange={(e) =>
              dispatch(updateQuery(['plant_based', e.target.value]))
            }
          >
            <option value=''>select</option>
            <option value='1'>Yes</option>
            <option value='0'>No</option>
          </select>
        </label>

        <label htmlFor='good_for_groups' className='dropDownLabel'>
          Good for Groups?
          <select
            className='dropDown'
            name='good_for_groups'
            id='good_for_groups'
            onChange={(e) =>
              dispatch(updateQuery(['good_for_groups', e.target.value]))
            }
          >
            <option value=''>select</option>
            <option value='1'>Yes</option>
            <option value='0'>No</option>
          </select>
        </label>

        <label htmlFor='locationRad' className='dropDownLabel'>
          Location Radius
          <select
            className='dropDown'
            name='Location'
            id='locationRadius'
            onChange={(e) =>
              dispatch(updateQuery(['location_radius', e.target.value]))
            }
          >
            <option value=''>select</option>
            <option value='5'>5 km</option>
            <option value='10'>10 km</option>
            <option value='15'>15 km</option>
            <option value='20'>20 km</option>
            <option value='25'>25 km</option>
          </select>
        </label>
      </form>
    </div>
  );
};
/*
Location input field removed
 <input
  type='text'
  id='zipCode'
  placeholder='zipcode'
  onChange={(e) => dispatch(updateQuery(['zipCode', e.target.value]))}
/> */

// fields:
export default RestaurantQuery;
