export interface IListView {
  data: any;
  onPressItem?: (item: any) => void;
  onPressItemDetail?: (item: any) => void;
  listType: number;
}
