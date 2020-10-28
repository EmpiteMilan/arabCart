import React from 'react';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../../../styles/styles';
import styles from './menuItemPrice.styles';
import { scale } from '../../../../../customized/utils/scale';
import { IMenuItemPrice } from './menuItemPrice.interface';

const {container,headline} = styles;

const {
  fontWeightBold
} = defaultStyles;
const MenuItemPrice = (props: IMenuItemPrice) => {
  return (
    <View style={[ container,]}>
      <Text style={[headline,fontWeightBold]}>{props.title}</Text>
    </View>
  );
};
export {MenuItemPrice};