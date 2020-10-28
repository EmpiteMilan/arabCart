export interface ITableListItem {
  onPressItem: () => void;
  checked: boolean;
  item: {
    id: string;
    title: string;
    description: string;
    cost: string;
    isEnable: boolean;
    image:string;
    time:string;
  };
  index: number;
}
