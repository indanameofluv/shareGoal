import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import CircleButton from '../components/CircleButton';

export default function CountScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.eachGoal}>
        <View style={styles.texts}>
          <Text style={styles.goalName}>勉強時間</Text>
          <Text style={styles.number}>0h</Text>
        </View>
        <View style={styles.buttonPair}>
          <View>
            <CircleButton name="minus" size={50} color="white" />
          </View>
          <View>
            <CircleButton name="plus" size={50} color="white" />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  eachGoal: {
    flex: 1,
    marginTop: 60,
  },
  buttonPair: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    marginTop: 280,
  },
  goalName: {
    marginBottom: 80,
    fontSize: 40,
    color: '#BEB7E3',
  },
  number: {
    fontSize: 35,
    marginTop: 120,
    marginBottom: 60,
    color: '#BEB7E3',
  },
  texts: {
    alignItems: 'center',
  },
});

//  フォントはカスタムとして新たにインストールしないとエラーになるものばかり説ある？
//  CircleButtonには目標追加のためのボタンも追加せねばならぬしかしプラマイボタンとは配置等が異なるため、 propsで色々変更できるように仕様を変えないといけない
//  目標名、数字、単位もpropsで変更できるようにせねばならぬ
//  ボタンの間隔をあけたいが、marginでしか変えれないのか？ど真ん中から均等にあけたい
//  達成率も表示させたい（達成の数字/目標の数字*100+%)でできる、1日の平均作業量？
