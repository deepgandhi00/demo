import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    setIsLoggedIn: {
      reducer: (state, action) => {
        state.isLoggedIn = action.payload;
      },
    },
  },
});

export const selectAuthSlice = state => state.auth;
export const {setIsLoggedIn} = authSlice.actions;
export default authSlice.reducer;
