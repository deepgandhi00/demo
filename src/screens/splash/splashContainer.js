import React, {useEffect} from 'react';
import SplashView from './splashView';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../redux/slices/authSlice';
import {getAccessToken} from '../../utils/preferences';

const SplashContainer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(checkForAccessToken, 2000);
  }, []);

  const checkForAccessToken = () => {
    getAccessToken()
      .then(accessToken => {
        if (accessToken && accessToken === 'true') {
          dispatch(setIsLoggedIn(true));
        } else {
          dispatch(setIsLoggedIn(false));
        }
      })
      .catch(error => {
        dispatch(setIsLoggedIn(false));
      });
  };
  return <SplashView />;
};

export default SplashContainer;
