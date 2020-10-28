import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SVGCheck from '../../../assets/order/check.svg';
import defaultStyles from '../../styles/styles';
import styles from './checkItem.styles';
import {ICheckBoxItem} from './checkItem.interface';
import {scale} from '../customized/utils/scale';
import {InputSpinner} from '../';

const {
  flexDirectionRow,
  alignCenter,
  fontSize20,
  colorBlack2C2C2C,
  flex1,
} = defaultStyles;
const {
  container,
  checkBoxStyle,
  borderCheckBox,
  backgroundCheckBox,
  spinnerView,
} = styles;

export interface Props {}

const CheckItem = (props: ICheckBoxItem) => {
  const {option, index, onPress, checked} = props;
  let cbStyle: Array<any> = [checkBoxStyle];

  let cbExtraStyle: Object = checked ? backgroundCheckBox : borderCheckBox;
  cbStyle.push(cbExtraStyle);
  return (
    <View>
      <TouchableOpacity
        key={index}
        style={[flexDirectionRow, alignCenter, container]}
        onPress={() => onPress(index)}>
        <View style={cbStyle}>
          {checked ? <SVGCheck width={scale(20)} height={scale(15)} /> : null}
        </View>
        <View style={[flex1]}>
          <Text style={[fontSize20, colorBlack2C2C2C]}>{option.title}</Text>
        </View>
        <View>
          <Text style={[fontSize20, colorBlack2C2C2C]}>{option.price}</Text>
        </View>
      </TouchableOpacity>

      <View style={[spinnerView]}>{checked ? <InputSpinner /> : null}</View>
    </View>
  );
};
export {CheckItem};
