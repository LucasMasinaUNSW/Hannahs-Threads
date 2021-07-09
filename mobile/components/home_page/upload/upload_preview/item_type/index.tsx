import React, { useState } from 'react';
import { View } from 'react-native';
import { ItemInfo, ItemSelectionType } from '../../interfaces';
import DropDownPicker, { ValueType } from 'react-native-dropdown-picker';

interface typeSelectProps {
  itemInfo: ItemInfo,
  handleChange: (v: ItemSelectionType, itemId: number) => void,
}

interface typeItem {
  label: string,
  value: string
}

export default function TypeSelect(props: typeSelectProps) {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<ValueType>('');
  const [items, setItems] = useState<typeItem[]>([
    {label: 'Design', value: 'design'},
    {label: 'Fabrics', value: 'fabric'},
    {label: 'Closet', value: 'closet'},
  ]);

  return (
    <View>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        onChangeValue={(v) => props.handleChange(v, props.itemInfo.id)}
        setItems={setItems}/>
    </View>
  );
}
