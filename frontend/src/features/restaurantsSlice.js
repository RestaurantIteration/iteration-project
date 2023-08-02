import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 // here can we initialize this to all of our restaurants? or wait until user querys?
  restList: []

}


export const restaurantsSlice = createSlice({
 name: 'restaurants',
 initialState,
 reducers: {
  updateRest: (state, action) => {
   // action payload should be an array [query attricute, value]
    state.restList = action.payload;
  }
 }
})

export const { updateRest } = restaurantsSlice.actions;
export default restaurantsSlice.reducer;
