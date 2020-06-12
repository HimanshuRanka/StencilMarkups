import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homes from './Screens/Homes'
import Rooms from "./Screens/Rooms";
import ItemSheet from "./Screens/ItemSheet";

export default function App() {
  return (
      /*<View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>*/
      <View style={styles.container}>
        <ItemSheet />
      </View>
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
