import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen, { navigationOptions } from './src/components/MainScreen';

const AppStackNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions,
  },
});

export default createAppContainer(AppStackNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
