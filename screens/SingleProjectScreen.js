import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const SingleProjectScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Single Project Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default SingleProjectScreen;
