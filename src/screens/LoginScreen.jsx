import React, { useState, useEffect } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from 'firebase';

import Button from '../components/Button';
import Loading from '../components/Loading';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        navigation.reset({
          index: 0,
          routes: [{ name: 'GoalList' }],
        });
      }else {
        setLoading(false);
      }
    });
    return unsubscribe;
  }, []);
//  callBack関数の後の殻配列

  function handlePress() {
    setLoading(true);
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        const { user } = userCredential;
        console.log(user.uid);
        navigation.reset({
          index: 0,
          routes: [{ name: 'GoalList' }],
        });
      })
      .catch((error) => {
        Alert.alert(error.code);
      })
      .then(() => {
        setLoading(false);
      });
  }

  return (
    <View style={styles.container}>
      <Loading isLoading={isLoading} />
      <View style={styles.inner}>
        <Text style={styles.title}>ログイン</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => { setEmail(text); }}
          autoCapitalize="none"
          keyboardType="email-address"
          placeholder="Email Address"
          textContentType="emailAddress"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => { setPassword(text); }}
          autoCapitalize="none"
          placeholder="Password"
          secureTextEntry
          textContentType="password"
        />
        <Button
          label="送信"
          onPress={handlePress}
        />
        <View style={styles.footer}>
          <Text style={styles.footerText}>登録はまーだなの？</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'Signup' }],
              });
            }}
          >
            <Text style={styles.footerLink}>登録はこちら</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

//  ButtonにonPressを入れていないのと、props系統何も入れていないのとnavigation系統何も入れていないのでそこを注意
// TextInputの文字が最初大文字になってしまうのと、キーボードが英字になっているため、日本仕様にすべし

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  inner: {
    paddingHorizontal: 27,
    paddingVertical: 24,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    marginBottom: 24,
  },
  input: {
    fontSize: 16,
    height: 48,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    paddingHorizontal: 8,
    marginBottom: 16,
  },

  footerText: {
    fontSize: 14,
    lineHeight: 24,
    marginRight: 8,
  },
  footerLink: {
    fontSize: 14,
    lineHeight: 24,
    color: '#467fd3',
  },
  footer: {
    flexDirection: 'row',
  },
});
