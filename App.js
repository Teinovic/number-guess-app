import React from 'react';
import { StyleSheet, View } from 'react-native';
import Header from './components/header';

export default function App() {
  return (
    <View style={styles.screen}>
      <Header>Guess a number</Header>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
