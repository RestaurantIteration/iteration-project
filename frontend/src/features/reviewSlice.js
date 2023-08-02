import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 // here can we initialize this to all of our restaurants? or wait until user querys?
  restName: '',
  staffAtt: '',
  service: '',
  review: '',
  recommend: '',
  bathroom: '',

}
//{bathroom: 'has cleaning products inside', staffAtt: 'Friendly'}

export const reviewSlice = createSlice({
 name: 'review',
 initialState,
 reducers: {
   updateReview: (state, action) => {
     console.log(action.payload);
     // action payload should be an array [review attribute,  attricute, value]
     const { field, value } = action.payload;
    //  console.log(field)
     // const attribute = action.payload[0];
     // const value = action.payload[1];
     state[field] = value;
     console.log(state)
  }
 }
})

export const { updateReview } = reviewSlice.actions;
export default reviewSlice.reducer;