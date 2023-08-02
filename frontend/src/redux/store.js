import { configureStore } from '@reduxjs/toolkit';
import queryReducer from '../features/querySlice';
import restaurantsReducer from '../features/restaurantsSlice';
import reviewSlice from '../features/reviewSlice';
//  restaurants: restaurantsReducer,
export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer,
    query: queryReducer,
    review: reviewSlice,
  },
});

export default store;
