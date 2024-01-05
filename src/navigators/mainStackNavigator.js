import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {selectAuthSlice} from '../redux/slices/authSlice';
import {useSelector} from 'react-redux';
import HomeContainer from '../screens/home/homeContainer';
import SignUpContainer from '../screens/signUp/signUpContainer';
import LoginContainer from '../screens/login/loginContainer';
import SplashContainer from '../screens/splash/splashContainer';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
  const authObserver = useSelector(selectAuthSlice);

  if (authObserver.isLoggedIn === null) {
    return <SplashContainer />;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {getRoutes(authObserver.isLoggedIn)}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const getRoutes = isLoggedIn => {
  if (isLoggedIn) {
    return <Stack.Screen name="home" component={HomeContainer} />;
  } else {
    return (
      <>
        <Stack.Screen name="login" component={LoginContainer} />
        <Stack.Screen name="signUp" component={SignUpContainer} />
      </>
    );
  }
};

export default MainStackNavigator;
