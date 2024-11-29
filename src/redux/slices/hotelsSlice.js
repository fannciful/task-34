import { createSlice } from '@reduxjs/toolkit';

const hotelsSlice = createSlice({
  name: 'hotels',
  initialState: { list: [] },
  reducers: {
    fetchHotels: (state, action) => {},
    setHotels: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { fetchHotels, setHotels } = hotelsSlice.actions;
export default hotelsSlice.reducer;
