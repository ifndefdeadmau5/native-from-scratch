import React, { Component } from 'react';
import { StyleSheet, Platform, View, Text } from 'react-native';
import { createMaterialTopTabNavigator, createAppContainer } from 'react-navigation'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import { Icon } from 'native-base';
import CameraTab from './AppTabNavigator/CameraTab';
import FeedTab from './AppTabNavigator/FeedTab';

export const navigationOptions = {
  headerLeft: <Icon name="ios-camera" style={{ paddingLeft: 10 }} />,
  title: 'Instagram',
  headerRight: <Icon name="ios-send" style={{ paddingRight: 10 }} />,
  headerTitleContainerStyle: {
    justifyContent: 'center',
  },
};

const AppTabNavigator = createMaterialBottomTabNavigator({
  CameraTab: { screen: CameraTab, navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='camera' style={{ color: tintColor }} />
  ),
  } },
  FeedTab: { screen: FeedTab, navigationOptions: {
    tabBarIcon: ({ tintColor }) => (
      <Icon name='ios-home' style={{ color: tintColor }} />
  ),
  } },
}, {
  initialRouteName: 'CameraTab',
  activeColor: '#f0edf6',
  inactiveColor: '#3e2465',
  barStyle: { backgroundColor: '#694fad' },
  shifting: true,
});

export default createAppContainer(AppTabNavigator);
