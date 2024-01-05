import React, {useEffect, useState} from 'react';
import SignUpView from './signUpView';
import {useNavigation} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import {setAccessToken} from '../../utils/preferences';
import {setIsLoggedIn} from '../../redux/slices/authSlice';

const SignUpContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const emailRegex = /^[\w-+\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const lowerCaseRegex = /[a-z]/;
  const upperCaseRegex = /[A-Z]/;

  const [name, setName] = useState(null);
  const [nameError, setNameError] = useState(null);
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(null);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [confirmPasswordError, setConfirmPasswordError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const onLoginPress = () => {
    navigation.navigate('login');
  };

  const onRegisterPress = () => {
    if (!name || name.trim() === '') {
      setNameError('Please enter name');
      return;
    }

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

    if (
      password.length < 8 ||
      !lowerCaseRegex.test(password) ||
      !upperCaseRegex.test(password)
    ) {
      setPasswordError(
        'Please enter password with at least 8 characters with upper and lower case',
      );
      return;
    }

    if (confirmPassword !== password) {
      setConfirmPasswordError('Confirm password and password do not match');
      return;
    }

    setIsLoading(true);
    setTimeout(() => {
      setAccessToken()
        .then(() => {
          setIsLoading(false);
          dispatch(setIsLoggedIn(true));
        })
        .catch(() => {});
    }, 1000);
  };

  return (
    <SignUpView
      name={name}
      setName={setName}
      confirmPassword={confirmPassword}
      email={email}
      isLoading={isLoading}
      onLoginPress={onLoginPress}
      password={password}
      setConfirmPassword={setConfirmPassword}
      setEmail={setEmail}
      setPassword={setPassword}
      confirmPasswordError={confirmPasswordError}
      emailError={emailError}
      nameError={nameError}
      passwordError={passwordError}
      setConfirmPasswordError={setConfirmPasswordError}
      setEmailError={setEmailError}
      setNameError={setNameError}
      setPasswordError={setPasswordError}
      onRegisterPress={onRegisterPress}
    />
  );
};

export default SignUpContainer;
