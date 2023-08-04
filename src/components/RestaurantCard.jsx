import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { moveCenter } from '../slices/googleSlice';
import { updateAdditionalData, updateReview } from '../slices/reviewSlice';

//deconstruct passed down info prop
const RestaurantCard = ({
  info,
  restaurantId,
  address,
  phone,
  transactions,
  categories,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { name, image_url, rating, review_count, price } = info;
  const additionalData = {
    name: name,
    image_url: image_url,
    rating: rating,
    review_count: review_count,
    price: price,
    address: address,
    phone: phone,
    transactions: transactions,
    categories: categories,
  };

  const handleRestaurantClick = async (restaurantId, position) => {
    try {
      dispatch(moveCenter(position));
      const jsonData = await fetch(
        `http://localhost:3000/api/restaurant/${restaurantId}`
      );
      const reviews = await jsonData.json();
      console.log(reviews, 'reviews');
      dispatch(updateReview(reviews));
      dispatch(updateAdditionalData(additionalData));
      navigate(`/restaurant/${restaurantId}`);
      // store the name, image_url, rating, review_count, categories, and price in state
      // dispatch(updateinfo(name, image_url, rating, review_count, categories, price));
      // after the navigate, need to pull the information out of state on the body component
      // const info = useSelector((state) => state.info);
    } catch (err) {
      console.log(`There was an error fetching restaurant reviews: ${err}`);
      return err;
    }
  };

  const position = {
    lat: info.coordinates.latitude,
    lng: info.coordinates.longitude,
  };

  return (
    <div
      className='resCard'
      onClick={() => handleRestaurantClick(restaurantId, position)}
    >
      <h1>{name}</h1>
      <h2>Cuisine: {categories[0].title}</h2>
      <img
        id='restaurantPreview'
        src={image_url}
      ></img>
      <p>
        <strong>Rating: </strong> {rating}
      </p>
      <p>
        <strong>Number of reviews: </strong> {review_count}
      </p>
      <p>
        <strong>Price: </strong> {price}
      </p>
    </div>
  );
};

export default RestaurantCard;
