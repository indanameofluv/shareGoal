import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>ShareGoals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    height: 105,
    paddingTop: 25,
  },
  title: {
    fontSize: 20,
    color: 'pink',
  },
});
