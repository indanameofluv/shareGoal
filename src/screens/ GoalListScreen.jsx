import React, { userEffect, useState } from 'react';
import {
  StyleSheet, TouchableOpacity, Text, View, Alert
} from 'react-native';
import firebase from 'firebase';

import CircleButton from '../components/CircleButton';
import GoalList from '../components/GoalList';
import LogOutButton from '../components/LogOutButton';
import { useEffect } from 'react/cjs/react.development';
import Loading from '../components/Loading';

export default function GoalListScreen(props) {
  const { navigation } = props;
  const [goals, setGoals] = useState([]);
  const [ isLoading, setLoading ] = useState(false);

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
      setLoading(true);
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
        setLoading(false);
    }, (error) => {
      console.log(error);
      setLoading(false);
      Alert.alert('データの読み込みに失敗しました。')
    });
    }
    return unsubscribe;
  }, []);

  if (goals.length === 0) {
    return (
      <View style={styles.containerZero}>
        <Loading isLoading={isLoading} />
        <Text style={styles.createMemoText}>最初のメモを作成しよう🤡</Text>
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
  
  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading}/>
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
  createButton: {
    position: 'absolute',
    bottom:50,
    right:50,
  },
  containerZero: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  createMemoText: {
    marginBottom: 115,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  }
});

//  eachGoalがそれぞれのの目標のリストになるものの、
//  新規追加したい際にどのように増やしていけば良いのかがわからない。
// BackButtonをつけて、Sign UpまたはLogInに戻れるように編集。
// goalListの情報をpropsで受け渡ししたい（goalEditで入力した情報。）
// 目標に文字が入ってないとGoal Listが小さくなってしまう。文字のサイズを含めのGoalListの高さではなく
// そのものの高さを合わせなくてはならない。
//　まあ目標名入れてなかったらエラーが出るようにはするけども
