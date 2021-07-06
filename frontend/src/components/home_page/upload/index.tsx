import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UploadButton from './upload_button';
import UploadPreview from './upload_preview';

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

function Upload() {
  const classes = useStyles();

  const [files, updateFiles] = useState<FileList|null>(null);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Image selected!");
    updateFiles(e.target.files);
  }

  return (
    <div className={classes.root}>
      {!files && <UploadButton handleClick={handleClick}/>}
      {files && Array.from(files, filesToImagePreviews)}
      {files && <Button variant="contained" color="primary" component="span">Submit</Button>}
    </div>
  );
}

const filesToImagePreviews = (file: File) => {
  return <UploadPreview imageSource={URL.createObjectURL(file)} imageName={file.name}/> // TODO if possible use URL.revokeObjectURL() to save memory
}

export default Upload;
