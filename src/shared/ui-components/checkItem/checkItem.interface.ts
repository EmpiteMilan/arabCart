export interface ICheckBoxItem {
  option: {
    title: string;
    price: string;
  };
  checked: boolean;
  index: number;
  onPress: (index: number) => void;
}
