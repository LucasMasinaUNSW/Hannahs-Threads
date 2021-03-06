import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ItemInfo from '../../interfaces';

const useStyles = makeStyles({
  formControl: {
    margin: 'auto',
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: 'auto',
  },
});

interface typeSelectProps {
  itemInfo: ItemInfo,
  handleChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
}

function TypeSelect(props: typeSelectProps) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Item Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.itemInfo.itemType}
          onChange={(e) => props.handleChange(e, props.itemInfo.id)}
        >
          <MenuItem value={"design"}>Design</MenuItem>
          <MenuItem value={"fabric"}>Fabric</MenuItem>
          <MenuItem value={"closet"}>Closet</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export default TypeSelect;
