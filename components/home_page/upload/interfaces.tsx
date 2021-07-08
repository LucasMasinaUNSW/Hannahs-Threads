// type ItemType = "design" | "fabric" | "closet" | ""; 

interface ItemInfo {
    id: number,
    imageSource: string,
    imageName: string,
    itemType: string,
    description: string,
  };
  
  export default ItemInfo;