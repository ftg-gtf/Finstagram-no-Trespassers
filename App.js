
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Facebook from './Facebook';
import Instagram from './Instagram';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export default class App extends React.Component{
  render(){
    return <AppContainer/>
  }
}

const tabNavigator = createBottomTabNavigator({
  facebookScreen: {screen: Facebook},
  instagramScreen: {screen: Instagram}
});

const AppContainer = createAppContainer(tabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
