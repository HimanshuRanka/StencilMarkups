import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homes from './Screens/Homes'
import Rooms from "./Screens/Rooms";
import ItemSheet from "./Screens/ItemSheet";
import {NavigationContainer} from "@react-navigation/native";
import Navigator from './Routes/MainStack'

export default function App() {
  return (
      <Navigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2ff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
