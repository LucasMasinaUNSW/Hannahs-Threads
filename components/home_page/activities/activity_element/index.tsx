import React from "react";
import { Text, View, Button, Image } from "react-native";

const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 64,
    height: 64
};

interface ActivityProps {
    activityName: string
}

export default function Activities(props: ActivityProps) {
  return (
      <View>
          <Image source={logo} />
          <Text>{props.activityName} activity card</Text>
          <Text>Click below to access the {props.activityName} activity</Text>
          <Button onPress={() => {}} title={`Go to ${props.activityName}`}/>
      </View>
  );
}
