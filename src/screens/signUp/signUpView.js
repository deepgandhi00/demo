import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BaseTextField from '../../components/textFields/baseTextField';
import PasswordTextField from '../../components/textFields/passwordTextField';
import PrimaryButton from '../../components/buttons/primaryButton';

const SignUpView = ({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  confirmPassword,
  setConfirmPassword,
  isLoading,
  onLoginPress,
  nameError,
  setNameError,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
  confirmPasswordError,
  setConfirmPasswordError,
  onRegisterPress,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <BaseTextField
          placeHolder="Enter Name"
          text={name}
          setText={setName}
          error={nameError}
          onChange={() => setNameError(null)}
        />
        <BaseTextField
          placeHolder="Enter Email"
          text={email}
          setText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          customStyles={[styles.marginTop24]}
          error={emailError}
          onChange={() => setEmailError(null)}
        />
        <PasswordTextField
          text={password}
          setText={setPassword}
          customStyles={[styles.marginTop24]}
          error={passwordError}
          onChange={() => setPasswordError(null)}
        />
        <PasswordTextField
          text={confirmPassword}
          setText={setConfirmPassword}
          customStyles={[styles.marginTop24]}
          placeHolder="Enter Confirm Password"
          error={confirmPasswordError}
          onChange={() => setConfirmPasswordError(null)}
        />
        <PrimaryButton
          btnText={'Register'}
          btnOnPress={onRegisterPress}
          isLoading={isLoading}
          btnCustomStyles={[styles.marginTop24]}
        />
        <Text style={styles.registerText} onPress={onLoginPress}>
          <Text>Already have an account? </Text>
          <Text>Login</Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#307ecc',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  marginTop24: {
    marginTop: 24,
  },
  registerText: {
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default SignUpView;
