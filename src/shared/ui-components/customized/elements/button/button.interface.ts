export interface IButton {
  buttonColor?: string;
  textColor?: string;
  textSize?: 'large' | 'small';
  size?: 'large' | 'small';
  fontSize?: string;
  onPress: () => void;
  title?: string;
  count?: string;
  countEnable: boolean;
  border?: boolean;
  borderColor?: string;
  flex?: boolean;
  children?: any;
  iconType?: number;
  flexAmount?: number;
}
