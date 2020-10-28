export interface ITabBarItem {
  routeName: string;
  isActive: 'active' | 'inactive';
  // index: number;
  // onPress: (index: number) => void;
  updateTabBarStackItem: (input: string) => void;
  navigation: any;
}
