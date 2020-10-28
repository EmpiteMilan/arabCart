export interface IInput {
  iconType:string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  onPressIcon?: () => void;
  label: string;
  editable?: boolean;
  secureTextEntry?: boolean;
  secureTextBtnVisible?: boolean;
  keyboardType?: any;
  customStyle?: object;
}
