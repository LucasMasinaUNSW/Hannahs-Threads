import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { View, Image, Text, Button } from "react-native";

const logo = {
  uri: 'https://reactnative.dev/img/tiny_logo.png',
  width: 64,
  height: 64
};

interface ActivityProps {
  activityName: string,
  navigation: NavigationProp<any, any>
}

export default function Activity(props: ActivityProps) {
  return (
    <View>
      <Image source={logo} />
      <Text>{props.activityName} activity card</Text>
      <Text>Click below to access the {props.activityName} activity</Text>
      <Button onPress={() => props.navigation.navigate(props.activityName)} title={`Go to ${props.activityName}`}/>
    </View>
    );
}
