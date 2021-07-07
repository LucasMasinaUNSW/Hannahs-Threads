import React from 'react';
import TextField from '@material-ui/core/TextField';
import ItemInfo from '../../interfaces';


interface itemDescriptionProps {
  itemInfo: ItemInfo,
  handleChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
}

export default function ItemDescription(props: itemDescriptionProps) {
  return (
    <TextField
      id="standard-multiline-flexible"
      label="Description"
      multiline
      rowsMax={5}
      value={props.itemInfo.description}
      onChange={(e) => props.handleChange(e, props.itemInfo.id)}
    />
  );
}
