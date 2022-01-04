import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { Feather } from 'expo/vector-icons';

export default function GoalList() {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.GoalListItem}
        onPress={() => { navigation.navigate('Count'); }}
      >
        <View>
          <Text style={styles.GoalListItemTitle}>勉強時間</Text>
          <Text style={styles.GoalListItemDate}>2022年1月3日</Text>
        </View>
        <TouchableOpacity
          onPress={() => { Alert.alert('貴様、本当に良いのか？'); }}
          style={styles.GoalDelete}
        >
          <Text style={styles.deleteButton}>X</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  GoalListItem: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 19,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.15)',
  },
  GoalListItemTitle: {
    fontSize: 16,
    lineHeight: 32,
  },
  GoalListItemDate: {
    fontSize: 12,
    lineHeight: 25,
    color: '#848484',
  },
  GoalDelete: {
    padding: 8,
  },
  deleteButton: {
    fontSize: 16,
    color: '#B0B0B0',
  },
});
