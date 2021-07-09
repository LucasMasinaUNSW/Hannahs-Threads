import { NavigationProp } from "@react-navigation/native";
import React from "react";
import { ScrollView } from "react-native";
import Activity from "./activity_element";

interface ActivitiesProps {
  navigation: NavigationProp<any, any>
}


export default function Activities(props: ActivitiesProps) {
  return (
    <ScrollView>
      <Activity activityName="designs" navigation={props.navigation} />
      <Activity activityName="fabrics" navigation={props.navigation} />
      <Activity activityName="closet" navigation={props.navigation} />
    </ScrollView>
  );
}
