import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { ItemInfo } from '../../interfaces';

interface typeSelectProps {
  itemInfo: ItemInfo,
  handleChange: (v: string, itemId: number) => void,
}

const styles = StyleSheet.create({
  input: {
    height: 120,
    margin: 12,
    borderWidth: 1,
  },
});

export default function ItemDescription(props: typeSelectProps) {
  return (
    <View>
      <TextInput
        style={styles.input}
        editable
        maxLength={40}
        multiline
        numberOfLines={4}
        onChangeText={(v) => props.handleChange(v, props.itemInfo.id)}
        value={props.itemInfo.description}
      />
    </View>
  );
}
