import React, { useState } from 'react';
import { Button, GestureResponderEvent, View } from "react-native";
import UploadButton from './upload_button';
import UploadPreview from './upload_preview'
import ItemInfo from './interfaces';

export default function Upload() {

  const [files, updateFiles] = useState<FileList|null>(null);
  const [itemInfos, updateItemInfos] = useState<ItemInfo[]>([]);

  const handleUpload = (e: GestureResponderEvent) => {
    // let newFiles = e.target.files;
    // updateFiles(newFiles);
    // if (newFiles) {
    //   let newItemInfos: ItemInfo[] = Array.from(newFiles, fileToItemInfo);
    //   updateItemInfos(newItemInfos);
    // }
  }

  const handleTypeChange = (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => {
    // Gets copy of existing itemInfos, replaces target itemInfo and updates itemInfos
    // let oldItemInfos = [...itemInfos];
    // let newItemInfo = {
    //   ...oldItemInfos[itemId],
    //   itemType: e.target.value as string
    // };
    // oldItemInfos[itemId] = newItemInfo;
    // updateItemInfos(oldItemInfos);
  }

  const handleDescriptionChange = (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => {
    // Gets copy of existing itemInfos, replaces target itemInfo and updates itemInfos
    // let oldItemInfos = [...itemInfos];
    // let newItemInfo = {
    //   ...oldItemInfos[itemId],
    //   description: e.target.value as string
    // };
    // oldItemInfos[itemId] = newItemInfo;
    // updateItemInfos(oldItemInfos);
  }

  const handleItemDeletion = (itemId: number) => {
    // Gets copy of existing itemInfos, filters out target itemInfo and updates itemInfos
    // let oldItemInfos = [...itemInfos];
    // updateItemInfos(oldItemInfos.filter(i => i.id !== itemId));
  }

  const handleSubmit = () => {
    // TODO save files
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
    <View>
      {itemInfos.length === 0 && <UploadButton handleUpload={handleUpload}/>}
      {itemInfos.length > 0 && itemInfos.map(itemInfo => <UploadPreview handleTypeChange={handleTypeChange} handleDescriptionChange={handleDescriptionChange} handleItemDeletion={handleItemDeletion} itemInfo={itemInfo}/>)}
      {itemInfos.length > 0 && <Button onPress={handleSubmit} title="Submit"/>}
    </View>
  );
}
