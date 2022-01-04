import React from "react"
import {
  View, Text, StyleSheet, TextInput, Keyboard,
} from 'react-native';

import Button from '../components/Button';

export default function GoalEditScreen(props) {
  const { navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.AboutGoal}>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標はなんですか？</Text>
          <TextInput style={styles.GoalInput} />
        </View>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標時間は？</Text>
          <TextInput style={styles.GoalInput} />
        </View>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・時間の単位は？</Text>
          <TextInput style={styles.GoalInput} />
        </View>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標までの期限は？</Text>
          <TextInput style={styles.GoalInput} />
        </View>
      </View>
      <Button
        style={styles.Button}
        label="Complete"
        onPress={() => {
          navigation.reset({
            index: 0,
            routes: [{ name: 'GoalList' }],
          });
        }}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingLeft: 20,
    backgroundColor: 'white',
  },
  AboutGoal: {
    marginTop: 40,
    marginBottom: 25,
  },
  TextInputSet: {
  },
  GoalText: {
    fontSize: 20,
    marginBottom: 30,
    color: '#800073',
  },
  GoalInput: {
    marginBottom: 20,
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 20,
    width: 350,
  },
  Button: {
    position: 'absolute',
    marginLeft: 20,
  },
});

//  BUttonにmarginが効かない。
