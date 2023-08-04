import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import '../styles/main.scss';

const RestaurantReviewCard = () => {
	const navigate = useNavigate();
    const reviews = useSelector((state) => state.review);
	// const additionalData = useSelector((state) => state.additionalData);

	const reviewArr = [];
	reviews.reviews.reviews.forEach((review) => {
		reviewArr.push(<><br></br>{review.text}<br></br></>);
	});

	const handleBackClick = () => {
		// Navigates to the root directory
		navigate('/');
	};

	const { name, image_url, rating, review_count, price, address, phone, transactions, categories } = reviews.additionalData;

	return (
		<div className='resCard'>
			<h1>{name}</h1>
			<h2>Cuisine: {categories[0].title}</h2>
			<img id='restaurantPreview' src={image_url}></img>
			<p>
				<strong>Address: </strong> {address}
			</p>
			<p>
				<strong>Contact: </strong> {phone}
			</p>
			<p>
				<strong>Rating: </strong> {rating}
			</p>
			<p>
				<strong>Number of reviews: </strong> {review_count}
			</p>
			<p>
				<strong>Price: </strong> {price}
			</p>
            <p>
				<strong>Reviews: </strong> {reviewArr}
			</p>
			{/* <p>
				<strong>Transactions: </strong> {transactions}
			</p> */}
			<button class="search-button" onClick={handleBackClick}>Back</button>
		</div>
	);
  };
  
  export default RestaurantReviewCard;
  