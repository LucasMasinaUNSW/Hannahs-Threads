import React from "react";
import { Button, GestureResponderEvent } from "react-native";

interface UploadButtonProps {
  handleUpload: (e: GestureResponderEvent) => void
}

export default function UploadButton(props: UploadButtonProps) {
  return (
    <Button onPress={props.handleUpload} title="Upload"/>
  );
}