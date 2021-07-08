import React from "react";
import { ScrollView } from "react-native";
import Activity from "./activity_element";

export default function Activities() {
  return (
    <ScrollView>
      <Activity activityName="designs"/>
      <Activity activityName="fabrics"/>
      <Activity activityName="closet"/>
    </ScrollView>
  );
}
