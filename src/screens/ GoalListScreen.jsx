import React, { userEffect, useState } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View, Alert
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import GoalList from '../components/GoalList';
import LogOutButton from '../components/LogOutButton';
import { useEffect } from 'react/cjs/react.development';

export default function GoalListScreen(props) {
  const { goal, goalDue, navigation } = props;
  const [goals, setGoals] = useState([]);

  useEffect (() => {
    navigation.setOptions({
      headerRight: () => <LogOutButton />,
    });
  },[]);

  useEffect(() => {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    let unsubscribe =  () => {};
    if (currentUser) {
      const ref = db.collection(`users/${currentUser.uid}/goals`).orderBy('updatedAt', 'desc');
      unsubscribe = ref.onSnapshot((snapshot) => {
        const userGoals = [];
        snapshot.forEach((doc) => {
          console.log(doc.id, doc.data());
          const data = doc.data();
          userGoals.push({
            id: doc.id,
            bodyText: data.bodyText,
            updatedAt: data.updatedAt.toDate(),
          });
        });
        setGoals(userGoals);
    }, (error) => {
      console.log(error);
      Alert.alert('データの読み込みに失敗しました。')
    });
    }
    return unsubscribe;
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.eachGoal}>
        <Text style={styles.goal}>{goal}</Text>
        <Text style={styles.goalDue}>{goalDue}</Text>
      </View>
      <GoalList goals={goals}/>
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
    position: 'relative',
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
    position: 'absolute',
    bottom:50,
    right:50,
  },
});

//  eachGoalがそれぞれのの目標のリストになるものの、
//  新規追加したい際にどのように増やしていけば良いのかがわからない。
// BackButtonをつけて、Sign UpまたはLogInに戻れるように編集。
// goalListの情報をpropsで受け渡ししたい（goalEditで入力した情報。）
