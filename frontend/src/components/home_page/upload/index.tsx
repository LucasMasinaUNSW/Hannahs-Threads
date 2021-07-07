import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import UploadButton from './upload_button';
import UploadPreview from './upload_preview';
import ItemInfo from './interfaces';

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
  const [itemInfos, updateItemInfos] = useState<ItemInfo[]>([])

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    let newFiles = e.target.files;
    updateFiles(newFiles);
    if (newFiles) {
      let newItemInfos: ItemInfo[] = Array.from(newFiles, fileToItemInfo);
      updateItemInfos(newItemInfos);
    }
  }

  const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => {
    // Gets copy of existing itemInfos, replaces target itemInfo and updates itemInfos
    let oldItemInfos = [...itemInfos];
    let newItemInfo = {
      ...oldItemInfos[itemId],
      itemType: e.target.value as string
    };
    oldItemInfos[itemId] = newItemInfo;
    updateItemInfos(oldItemInfos);
  }

  const fileToItemInfo = (file: File, index: number): ItemInfo => {
    return {
      id: index,
      imageSource: URL.createObjectURL(file), // TODO if possible use URL.revokeObjectURL() to save memory
      imageName: file.name,
      itemType: '',
      description: ''
    };
  }

  return (
    <div className={classes.root}>
      {!files && <UploadButton handleUpload={handleUpload}/>}
      {files && itemInfos.map(itemInfo => <UploadPreview handleChange={handleTypeChange} itemInfo={itemInfo}/>)}
      {files && <Button variant="contained" color="primary" component="span">Submit</Button>}
    </div>
  );
}

export default Upload;
