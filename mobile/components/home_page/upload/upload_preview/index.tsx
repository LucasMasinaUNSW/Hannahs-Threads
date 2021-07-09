import React from "react";
import { ItemInfo, ItemSelectionType } from "../interfaces";
import { Image, TextInput, View, Button } from 'react-native';
import TypeSelect from "./item_type";
import ItemDescription from "./item_description";


interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleTypeChange: (v: ItemSelectionType, itemId: number) => void,
  handleDescriptionChange: (v: string, itemId: number) => void,
  handleItemDeletion: (id: number) => void,
}

function UploadPreview(props: uploadPreviewProps) {

  return (
    <View style={{ width: 400, height: 400 }}>
      <Image source={{ uri: props.itemInfo.imageSource }} style={{ width: 200, height: 200 }} />
      <TypeSelect handleChange={props.handleTypeChange} itemInfo={props.itemInfo}/>
      <ItemDescription handleChange={props.handleDescriptionChange} itemInfo={props.itemInfo}/>
      <Button onPress={() => props.handleItemDeletion(props.itemInfo.id)} title="Delete"/>
    </View>
  );
}

export default UploadPreview;