import React from 'react';
import HomeView from './homeView';
import {removeAccessToken} from '../../utils/preferences';
import {CommonActions, useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../redux/slices/authSlice';

const HomeContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const onLogoutPress = async () => {
    await removeAccessToken();
    dispatch(setIsLoggedIn(false));
  };

  return <HomeView onLogoutPress={onLogoutPress} />;
};

export default HomeContainer;
