import DefaultPreference from 'react-native-default-preference';

export const setAccessToken = () => {
  return DefaultPreference.set('token', 'true');
};

export const removeAccessToken = () => {
  DefaultPreference.clear('token');
};

export const getAccessToken = () => {
  return DefaultPreference.get('token');
};
