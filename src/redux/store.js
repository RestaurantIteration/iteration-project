import { configureStore } from '@reduxjs/toolkit';
import queryReducer from '../slices/querySlice';
import restaurantsReducer from '../slices/restaurantsSlice';
import reviewSlice from '../slices/reviewSlice';
//  restaurants: restaurantsReducer,
export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    query: queryReducer,
    review: reviewSlice,
  },
});

export default store;
