import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UploadButton from './upload_button';

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
      <UploadButton handleClick={handleClick}/>
      {files && Array.from(files, filesToImagePreviews)}
    </div>
  );
}

const filesToImagePreviews = (file: File) => {
  return <img src={URL.createObjectURL(file)} alt={file.name} />; // TODO if possible use URL.revokeObjectURL() to save memory
}

export default Upload;
