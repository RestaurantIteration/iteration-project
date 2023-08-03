import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStatus } from '../slices/restaurantsSlice';
import { redirect, useNavigate } from 'react-router-dom';

/*
export async function action({ request }) {
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

    redirect(`/${values.location}`);
  } catch (err) {
    console.log(`There was an error fetching restaurant data: ${err}`);
  }
}
*/

const RestaurantQuery = () => {
  const query = useSelector((state) => state.query);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let location = '';

  const getInputText = (e) => {
    location = e.target.value;
  };

  const searchHandler = async () => {
    dispatch(setStatus('loading'));
    navigate(`/${location}`);
  };

  return (
    <div className='queryFormContainer'>
      <label
        id='nameLabel'
        htmlFor='restaurant'
      >
        <input
          onChange={getInputText}
          placeholder='Search by location...'
          name='restaurant'
          type='text'
          id='restaurantName'
          onKeyDown={(e) => {
            if (e.key === 'Enter') searchHandler();
          }}
        />
      </label>
      <button
        onClick={searchHandler}
        className='search-button'
      >
        Search
      </button>

      {/* <label className='dropDownLabel' htmlFor='cuisine'>
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
        </label> */}
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
