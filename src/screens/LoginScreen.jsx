import React, { useState } from 'react';
import {
  StyleSheet, View, Text, TextInput, TouchableOpacity,
} from 'react-native';

import Button from '../components/Button';

export default function LoginScreen(props) {
  const { navigation } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.inner}>
          <Text style={styles.title}>ログイン</Text>
          <TextInput
            style={styles.input}
            value={email}
            onChangeText={ (text) => { setEmail(text); }}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholder="Email Address"
            textContentType="emailAddress"
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={
                 (text) => { setPassword(text); }
                }
            autoCapitalize="none"
            placeholder="Password"
            secureTextEntry
            textContentType="password"
          />
          <Button
            label="送信"
            onPress={() => {
              navigation.reset({
                index: 0,
                routes: [{ name: 'GoalList' }],
              });
            }}
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
