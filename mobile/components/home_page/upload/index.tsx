import React, { useState } from 'react';
import { Button, GestureResponderEvent, View } from "react-native";
import UploadButton from './upload_button';
import UploadPreview from './upload_preview';
import { ItemInfo, ItemSelectionType } from './interfaces';
import { ImagePickerResult, launchImageLibraryAsync, MediaTypeOptions } from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
// import { ImageBrowser } from 'expo-image-picker-multiple'; // TODO implement multiple image selection

export default function Upload() {

  const [itemInfos, updateItemInfos] = useState<ItemInfo[]>([]);

  const handleUpload = async () => {
    let newImage: ImagePickerResult = await launchImageLibraryAsync({
      mediaTypes: MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!newImage.cancelled) {
      let newItemInfos: ItemInfo[] = [fileToItemInfo(newImage, 0)];
      updateItemInfos(newItemInfos);
    }
  }

  const fileToItemInfo = (image: ImageInfo, index: number): ItemInfo => {
    return {
      id: index,
      imageSource: image.uri,
      imageName: image.uri, // TODO get image file name
      itemType: '',
      description: ''
    };
  }

  const handleTypeChange = (v: ItemSelectionType, itemId: number) => {
    // Gets copy of existing itemInfos, replaces target itemInfo and updates itemInfos
    let oldItemInfos = [...itemInfos];
    let newItemInfo = {
      ...oldItemInfos[itemId],
      itemType: v ? v.toString() : ''
    };
    oldItemInfos[itemId] = newItemInfo;
    updateItemInfos(oldItemInfos);
  }

  const handleDescriptionChange = (v: string, itemId: number) => {
    // Gets copy of existing itemInfos, replaces target itemInfo and updates itemInfos
    let oldItemInfos = [...itemInfos];
    let newItemInfo = {
      ...oldItemInfos[itemId],
      description: v
    };
    oldItemInfos[itemId] = newItemInfo;
    updateItemInfos(oldItemInfos);
  }

  const handleItemDeletion = (itemId: number) => {
    // Gets copy of existing itemInfos, filters out target itemInfo and updates itemInfos
    let oldItemInfos = [...itemInfos];
    updateItemInfos(oldItemInfos.filter(i => i.id !== itemId));
  }

  const handleSubmit = () => {
    // TODO save files
  }

  return (
    <View>
      {itemInfos.length === 0 && <UploadButton handleUpload={handleUpload}/>}
      {itemInfos.length > 0 && itemInfos.map(itemInfo => <UploadPreview handleTypeChange={handleTypeChange} handleDescriptionChange={handleDescriptionChange} handleItemDeletion={handleItemDeletion} itemInfo={itemInfo}/>)}
      {itemInfos.length > 0 && <Button onPress={handleSubmit} title="Submit"/>}
    </View>
  );
}
