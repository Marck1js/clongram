import React from 'react';

import {StyleSheet, Text, View} from 'react-native';

const Settings = props => {
  return (
    <View style={styles.root}>
      <Text>Settings Screen</Text>
    </View>
  );
};

export default Settings;


Settings.options = {
  topBar: {
    // visible: false,
    title: {
      text: 'Settings'
    },
  
  },
  bottomTab: {
    text: 'Settings'
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'whitesmoke',
  },
});
