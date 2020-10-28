export interface ITableListItem {
  onPressItem: () => void;
  checked: boolean;
  item: {
    id: string;
    title: string;
    description: string;
    cost: string;
    img:string,
    isEnable: boolean;
  };
  index: number;
}
