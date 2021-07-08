import React from "react";
import ItemInfo from "../interfaces";
import { FlatList, Text, View, Button } from 'react-native';


interface uploadPreviewProps {
  itemInfo: ItemInfo,
  handleTypeChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleDescriptionChange: (e: React.ChangeEvent<{ value: unknown }>, itemId: number) => void,
  handleItemDeletion: (id: number) => void,
}

function UploadPreview(props: uploadPreviewProps) {

  return (
    <View>
      {/* <FlatList>
      </FlatList> */}
      <Text>Upload Preview Image</Text>
      <Text>Upload Preview Image Name</Text>
      <Text>Upload Preview Type Select</Text>
      <Text>Upload Preview Description</Text>
      <Button onPress={() => {}} title="Delete"/>
    </View>
  );
}

export default UploadPreview;