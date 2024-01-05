import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import PrimaryButton from '../../components/buttons/primaryButton';

const HomeView = ({onLogoutPress}) => {
  return (
    <SafeAreaView style={styles.safeAreaStyle}>
      <View style={styles.screenStyle}>
        <Text style={styles.welcomeText}>Welcome!</Text>
        <PrimaryButton
          btnText={'Log out'}
          btnOnPress={onLogoutPress}
          btnCustomStyles={[styles.logoutButton]}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaStyle: {
    flex: 1,
  },
  screenStyle: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#307ecc',
  },
  welcomeText: {
    fontSize: 22,
    fontWeight: '500',
    color: '#fff',
    textAlign: 'center',
  },
  logoutButton: {
    marginTop: 24,
  },
});

export default HomeView;
