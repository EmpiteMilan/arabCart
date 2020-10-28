export interface IMenuListItem {
  onPressItem: () => void;
  checked: boolean;
  mainTitle: string;
  item: {
    title: string;
    description: string;
    cost: string;
    isEnable: boolean;
    rating: string;
    ratingName: string;
    reviewCount: string;
  };
  index: number;
}
