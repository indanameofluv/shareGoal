import React, {useState, Component} from "react"
import {
  View, Text, StyleSheet, TextInput, Keyboard,
} from 'react-native';
import DropDownPicker from "react-native-dropdown-picker";

import firebase from 'firebase';

import Button from '../components/Button';

export default function GoalEditScreen (props) {
  const { navigation } = props;
  const [bodyText, setBodyText] = useState('');
  const [number, setNumber] = useState('');
  const [due, setDue] = useState('');

  function handlePress () {
      const { currentUser } = firebase.auth();
      const db = firebase.firestore();
      const ref = db.collection(`users/${currentUser.uid}/goals`);
      ref.add({
        bodyText,
        number,
        due,
        updatedAt: new Date(),
      })
      .then((docRef) => {
        console.log('Created!', docRef.id);
        navigation.reset({
          index: 0,
          routes: [
            { name: 'GoalList' },
           ],
        });
      })
      .catch((error) => {
        console.log('Error!', error);
      });
  }

  return (
    <View style={styles.container}>
      <View style={styles.AboutGoal}>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標はなんですか？</Text>
          <TextInput
            value={bodyText}
            style={styles.GoalInput} 
            onChangeText={(text) => { setBodyText(text); }}
            autoFocus
          />
        </View>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標時間は？</Text>
          <View style={styles.TimeAndDropList}>
            <TextInput 
              value={number}
              style={styles.GoalTimeInput}
              onChangeText={(text) => { setNumber(text); }}
            />
            <View>
            <DropDownPicker 
                  items={[
                      {label: '単位', value: 'unit', selected: true},
                      {label: '分' ,value: 'min'},
                      {label: '時間', value: 'hour'},
                      {label: '日', value: 'day'},
                  ]}
                  defaultIndex={0}
                  style={{
                      height:40,
                      width: 100,
                      textAlign: 'center',
                  }}
                  // labelStyle = {{
                  //     fontSize: 40,
                  //     textAlign: 'center',
                  // }}
                  // dropDownStyle={{backgroundColor: 'hsla(0, 0%, 0%, 0.05)'}}
                  placeholder="単位"
                  placeholderStyle={{
                      textAlign: 'center',
                  }}
                  // onChangeItem={item => console.log(item.label, item.value)}
              />
            </View>
          </View>
        </View>
        <View style={styles.TextInputSet}>
          <Text style={styles.GoalText}>・目標までの期限は？</Text>
          <TextInput 
            value={due}
            style={styles.GoalInput} 
            onChangeText={(text) => {setDue(text)}}
          />
        </View>
      </View>
      <View style={styles.ButtonPosition}>
        <Button
          style={styles.Button}
          label="Complete"
          onPress={handlePress}
        />
      </View>

    </View>
  );
}

// autoFocusで自動的にキーボードが出力されない？？？

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: 'white',
  },
  AboutGoal: {
    marginTop: 40,
    marginBottom: 25,
  },
  TextInputSet: {
    marginLeft: 20,
  },
  GoalText: {
    fontSize: 20,
    marginBottom: 40,
    color: '#800073',
  },
  GoalInput: {
    marginBottom: 20,
    marginLeft: 20,
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 20,
    width: 245,
  },
  GoalTimeInput: {
    marginBottom: 20,
    marginLeft: 20,
    height: 40,
    borderColor: '#dddddd',
    borderWidth: 1,
    backgroundColor: '#ffffff',
    fontSize: 20,
    width: 130,
    marginRight: 15,
  },
  TimeAndDropList: {
    flexDirection: 'row',
  },
  Button: {
    position: 'absolute',
  },
  ButtonPosition: {
    marginTop: 20,
    marginLeft: 20,
  }
});

//  BUttonにmarginが効かない。
// ここでもuseState()を使うことになるはずなのである。
