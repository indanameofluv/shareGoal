import React from 'react';
import {
  View, Text, StyleSheet, TouchableOpacity, Alert, FlatList,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { shape, string, instanceOf, arrayOf } from 'prop-types';
// import { Feather } from 'expo/vector-icons';

export default function GoalList(props) {
  const { goals } = props;
  const navigation = useNavigation();

  function renderItem ({ item }) {
    return (
      <TouchableOpacity
        style={styles.GoalListItem}
        onPress={() => { navigation.navigate('Count'); }}
      >
      <View>
        <Text style={styles.GoalListItemTitle} numberOfLines={1}>{item.bodyText}</Text>
        <Text style={styles.GoalListItemDate}>{String(item.updatedAt)}</Text>
      </View>
      <TouchableOpacity
        onPress={() => { Alert.alert('貴様、本当に良いのか？'); }}
        style={styles.GoalDelete}
      >
        <Text style={styles.deleteButton}>X</Text>
      </TouchableOpacity>
    </TouchableOpacity>
    );
  }
  return (
    <View>
      <FlatList
        data = {goals}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
       />
    </View>
  );
}

GoalList.propTypes  = {
  goals: arrayOf(shape({
    id: string,
    bodyText: string,
    updatedAt: instanceOf(Date),
  })).isRequired,
};

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


// slideでデリートのやつが出てくる設定したい。
// GoalEditが空欄の箇所がある場合は、記入漏れがありますっていう赤文字が上記に出て、もう一回作り直させられる機能欲しい。
