import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';
import StartGameScreen from './screens/gameStart';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header>Guess a number</Header>
      <StartGameScreen>game screen</StartGameScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
