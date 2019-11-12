import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

const ProjectsScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>Projects Screen</Text>
      <Button
        title='Go Forward!'
        onPress={() => {
          props.navigation.navigate('SingleProject');
        }}
      />
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

export default ProjectsScreen;
