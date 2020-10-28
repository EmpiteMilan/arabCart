export interface IMainCategoryItem {
    title?:string;
    colour?:string;
    imageName?:string;
    onPress: (title:string) => void;
  }
  