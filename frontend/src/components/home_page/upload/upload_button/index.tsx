import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  root: {
    '& > *': {
      margin: 'auto',
    },
  },
  input: {
    display: 'none',
  },
});

interface UploadButtonProps {
  handleUpload: React.ChangeEventHandler<HTMLInputElement>
}

function UploadButton(props: UploadButtonProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <input accept="image/*" className={classes.input} id="contained-button-file" multiple type="file" onChange={props.handleUpload}/>
      <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">Upload</Button>
      </label>
    </div>
  );
}

export default UploadButton;
