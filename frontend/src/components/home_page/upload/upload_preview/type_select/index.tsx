import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  handleChange: React.ChangeEventHandler<{ value: unknown }>,
  imageType: string,
}

function TypeSelect(props: typeSelectProps) {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Image Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.imageType}
          onChange={props.handleChange}
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
