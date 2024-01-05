import React, {useState} from 'react';
import LoginView from './loginView';
import {useNavigation} from '@react-navigation/native';
import {setAccessToken} from '../../utils/preferences';
import {useDispatch} from 'react-redux';
import {setIsLoggedIn} from '../../redux/slices/authSlice';

const LoginContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const emailRegex = /^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onRegisterPress = () => {
    navigation.navigate('signUp');
  };

  const onLoginPress = () => {
    if (!email || email.trim() === '') {
      setEmailError('Please enter email');
      return;
    }

    if (!emailRegex.test(email)) {
      setEmailError('Please enter valid email address');
      return;
    }

    if (!password || password.trim() === '') {
      setPasswordError('Please enter password');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setAccessToken()
        .then(() => {
          setIsLoading(false);
          dispatch(setIsLoggedIn(true));
        })
        .catch(error => {});
    }, 1000);
  };

  return (
    <LoginView
      email={email}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      isLoading={isLoading}
      onRegisterPress={onRegisterPress}
      onLoginPress={onLoginPress}
      emailError={emailError}
      setEmailError={setEmailError}
      passwordError={passwordError}
      setPasswordError={setPasswordError}
    />
  );
};

export default LoginContainer;
