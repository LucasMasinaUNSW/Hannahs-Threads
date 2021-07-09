import { ValueType } from "react-native-dropdown-picker";

// type ItemType = "design" | "fabric" | "closet" | ""; 

export interface ItemInfo {
  id: number,
  imageSource: string,
  imageName: string,
  itemType: string,
  description: string,
};

export type ItemSelectionType = ValueType | ValueType[] | null;