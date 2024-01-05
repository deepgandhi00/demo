import React, {useState} from 'react';
import BaseTextField from './baseTextField';
import {Image, StyleSheet, TouchableWithoutFeedback, View} from 'react-native';

const PasswordTextField = ({
  text,
  setText,
  customStyles = [],
  placeHolder = 'Enter Password',
  error,
  onChange,
}) => {
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={[customStyles]}>
      <BaseTextField
        text={text}
        setText={setText}
        placeHolder={placeHolder}
        isSecure={isSecure}
        error={error}
        onChange={onChange}
      />
      <TouchableWithoutFeedback onPress={() => setIsSecure(!isSecure)}>
        <Image
          source={
            isSecure
              ? require('../../../assets/images/view.png')
              : require('../../../assets/images/hide.png')
          }
          style={styles.icon}
        />
      </TouchableWithoutFeedback>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  icon: {
    height: 25,
    width: 25,
    position: 'absolute',
    tintColor: '#fff',
    right: 24,
    top: 12,
  },
});

export default PasswordTextField;
