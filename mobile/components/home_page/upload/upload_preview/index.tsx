import React from "react";
import ItemInfo from "../interfaces";
import { FlatList, Image, Text, View, Button } from 'react-native';


interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleTypeChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleDescriptionChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleItemDeletion: (id: number) => void,
}

function UploadPreview(props: uploadPreviewProps) {

  return (
    <View>
      <Image source={{ uri: props.itemInfo.imageSource }} style={{ width: 200, height: 200 }} />
      <Text>{props.itemInfo.imageName}</Text>
      <Text>{props.itemInfo.itemType}</Text>
      <Text>{props.itemInfo.description}</Text>
      <Button onPress={() => props.handleItemDeletion(props.itemInfo.id)} title="Delete"/>
    </View>
  );
}

export default UploadPreview;