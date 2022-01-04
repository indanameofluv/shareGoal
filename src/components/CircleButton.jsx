import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import {
  shape, oneOf, func, string,
} from 'prop-types';
import { Feather } from '@expo/vector-icons';

export default function CircleButton(props) {
  const {
    style, name, size, color, onPress,
  } = props;
  return (
    <TouchableOpacity style={[styles.circleButton, style]} onPress={onPress}>
      <Feather name={name} size={size} color={color} />
    </TouchableOpacity>
  );
}

CircleButton.propTypes = {
  style: shape(),
  name: oneOf(['plus', 'edit-2', 'check', 'minus']).isRequired,
  onPress: func,
  size: string.isRequired,
  color: string.isRequired,
};

CircleButton.defaultprops = {
  style: null,
  onPress: null,
};

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#BEB7E3',
    width: 80,
    height: 80,
    borderRadius: 44,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 0,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
});

//  CircleButtonを追加した先でどのようなプロップスを入れるのか？など考える。スタイリングも異なるため独自に編集せよ。
