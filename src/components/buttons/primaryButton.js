import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

const PrimaryButton = ({
  btnText,
  btnOnPress,
  btnCustomStyles = [],
  btnTextCustomStyles = [],
  isLoading = false,
}) => {
  if (isLoading) {
    return <ActivityIndicator size={'large'} color={'#7DE24E'} />;
  }

  return (
    <TouchableWithoutFeedback onPress={btnOnPress}>
      <View style={[styles.container, ...btnCustomStyles]}>
        <Text style={[styles.btnText, ...btnTextCustomStyles]}>{btnText}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 32,
    backgroundColor: '#7DE24E',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default PrimaryButton;
