import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import Activity from "./activity_element";

export default function Activities({ navigation }: NavigationProp<any, any>) {
  return (
    <ScrollView>
      <Activity activityName="designs" navigation={navigation} />
      <Activity activityName="fabrics" navigation={navigation} />
      <Activity activityName="closet" navigation={navigation} />
    </ScrollView>
  );
}
