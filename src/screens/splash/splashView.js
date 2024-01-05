import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, View} from 'react-native';

const SplashView = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.screenStyle}>
        <ActivityIndicator size={'large'} color={'#7DE24E'} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#307ecc',
  },
});

export default SplashView;
