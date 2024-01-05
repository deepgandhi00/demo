import {combineReducers} from 'redux';
import authReducer from './slices/authSlice';
import {configureStore} from '@reduxjs/toolkit';

const combineReducer = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: combineReducer,
});

export default store;
