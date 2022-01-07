import React from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View,
} from 'react-native';

import CircleButton from '../components/CircleButton';
import GoalList from '../components/GoalList';

export default function GoalListScreen(props) {
  const { goal, goalDue, navigation } = props;
  return (
    <View style={styles.container}>
      <View style={styles.eachGoal}>
        <Text style={styles.goal}>{goal}</Text>
        <Text style={styles.goalDue}>{goalDue}</Text>
      </View>
      <GoalList />
      <View style={styles.createButton}>
        <CircleButton
          name="edit-2"
          size={50}
          color="white"
          onPress={() => {
            navigation.reset({
              index: 0,
              routes: [{ name: 'GoalEdit' }],
            });
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  eachGoal: {
    borderBottomColor: 'rgba(0, 0, 0, 0.15)',
    flexDirection: 'row',

  },
  goal: {
    fontSize: 25,
  },
  goalDue: {
    fontSize: 15,
    color: 'gray',
  },
  createButton: {
    marginTop: 590,
    marginLeft: 300,
  },
});

//  eachGoalがそれぞれのの目標のリストになるものの、
//  新規追加したい際にどのように増やしていけば良いのかがわからない。
// BackButtonをつけて、Sign UpまたはLogInに戻れるように編集。
// goalListの情報をpropsで受け渡ししたい（goalEditで入力した情報。）
