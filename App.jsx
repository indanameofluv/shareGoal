import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import firebase from 'firebase';

// 上記のライブラリはグラデーションを彩るためのもの。

import GoalEditScreen from './src/screens/GoalEditScreen';
import CountScreen from './src/screens/CountScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';
import GoalListScreen from './src/screens/ GoalListScreen';

import { firebaseConfig } from './env';

require('firebase/firestore');

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerStyle: { backgroundColor: '#BEB7E3', height: 115 },
          headerTitleStyle: { color: 'white', fontSize: 22 },
          headerTitle: 'ShareGoals',
          headerTintColor: '#ffffff',
          headerBackTitle: 'Back',
          cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          height: 1000,
        }}
      >
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Count" component={CountScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="GoalEdit" component={GoalEditScreen} />
        <Stack.Screen name="GoalList" component={GoalListScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//  ログインとサインアップスクリーンはMemoAppを完全にパクりましょう。
//  LoginScreen & SignUpScreen
//  目標を編集するGoalEditScreen
//  目標の一元管理ができるgoalListScreen
//  あとはfirebaseか何かでデータベースを作るだけ
//  目標までの制限時間等を設けられるようにする
//  達成したら風船か、花吹雪か、クラッカーか花火が出るような動的なものも追加する。
//  目標をフォローできるようにする
//  数字のところはデフォルトを０にして、そこからプラマイの数字を足していくという形にすれば良い
//  ヘッダーがヘッダーが二つでかぶっている為ここで修正する。
// サインアップ画面の登録のボタンは現時点ではメモリスト（メモアップ）の画面に遷移するようになっているため、
// ゴールリストスクリーンを作ってそこに飛ばす。

//  なぜCountScreenだけBackボタンがデフォルトで出現しているのか要確認。おそらくメモアップ作ったときに、ログインとサインアップだけ消した覚えあり
