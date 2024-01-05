import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import BaseTextField from '../../components/textFields/baseTextField';
import PasswordTextField from '../../components/textFields/passwordTextField';
import PrimaryButton from '../../components/buttons/primaryButton';

const LoginView = ({
  email,
  setEmail,
  password,
  setPassword,
  isLoading,
  onRegisterPress,
  onLoginPress,
  emailError,
  setEmailError,
  passwordError,
  setPasswordError,
}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <BaseTextField
          placeHolder="Enter Email"
          text={email}
          setText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
          error={emailError}
          onChange={() => setEmailError(null)}
        />
        <PasswordTextField
          text={password}
          setText={setPassword}
          customStyles={styles.passwordStyle}
          error={passwordError}
          onChange={() => setPasswordError(null)}
        />
        <PrimaryButton
          btnText={'Log In'}
          btnOnPress={onLoginPress}
          isLoading={isLoading}
        />
        <Text style={styles.registerText} onPress={onRegisterPress}>
          <Text>New Here? </Text>
          <Text>Register</Text>
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
  passwordStyle: {
    marginTop: 40,
    marginBottom: 40,
  },
  registerText: {
    fontSize: 16,
    color: '#fff',
    marginTop: 16,
    alignSelf: 'center',
  },
});

export default LoginView;
