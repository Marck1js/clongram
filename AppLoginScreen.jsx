import React from 'react';
import {mainRoot} from './index';
import {Navigation} from 'react-native-navigation';
import {Button, View, StyleSheet} from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.root}>
      <Button
        title="Iniciar Sesion"
        color="#218090"
        onPress={() => Navigation.setRoot(mainRoot)}
      />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
