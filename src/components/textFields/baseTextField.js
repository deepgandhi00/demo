import React from 'react';
import {Keyboard, StyleSheet, Text, TextInput} from 'react-native';

const BaseTextField = ({
  setText,
  text,
  placeHolder,
  customStyles = [],
  isSecure = false,
  keyboardType,
  autoCapitalize = 'sentences',
  onChange = () => {},
  error,
}) => {
  return (
    <>
      <TextInput
        style={[styles.inputStyle, ...customStyles]}
        onChangeText={val => {
          onChange();
          setText(val);
        }}
        value={text}
        underlineColorAndroid="#f000"
        placeholder={placeHolder}
        placeholderTextColor="#99abc9"
        autoCapitalize={autoCapitalize}
        returnKeyType="next"
        keyboardType={keyboardType}
        onSubmitEditing={Keyboard.dismiss}
        blurOnSubmit={false}
        secureTextEntry={isSecure}
      />
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
    </>
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  errorText: {
    fontSize: 12,
    color: '#e84c41',
    marginLeft: 16,
  },
});

export default BaseTextField;
