import React from "react";
import { ItemInfo, ItemSelectionType } from "../interfaces";
import { FlatList, Image, Text, View, Button, ScrollView } from 'react-native';
import TypeSelect from "./item_type";
import { ValueType } from "react-native-dropdown-picker";


interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleTypeChange: (v: ItemSelectionType, itemId: number) => void,
  handleDescriptionChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleItemDeletion: (id: number) => void,
}

function UploadPreview(props: uploadPreviewProps) {

  return (
    <View style={{ width: 400, height: 400 }}>
      <Image source={{ uri: props.itemInfo.imageSource }} style={{ width: 200, height: 200 }} />
      <TypeSelect handleChange={props.handleTypeChange} itemInfo={props.itemInfo}/>
      {/* <Text>{props.itemInfo.itemType}</Text> */}
      <Text>{props.itemInfo.description}</Text>
      <Button onPress={() => props.handleItemDeletion(props.itemInfo.id)} title="Delete"/>
    </View>
  );
}

export default UploadPreview;