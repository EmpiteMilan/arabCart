import React from 'react';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../../../styles/styles';
import styles from './menuItemFavourite.styles';
import { scale } from '../../../../../customized/utils/scale';
import { IMenuItemFavourite } from './menuItemFavourite.interface';
import SVGFavourite from '../../../../../../../assets/menu/heart.svg';
const {container} = styles;
const {
} = defaultStyles;
const MenuItemFavourite = (props: IMenuItemFavourite) => {
  return (
    <View style={[ container,]}>
     <SVGFavourite width={scale(20)} height={scale(18)} />
    </View>
  );
};
export {MenuItemFavourite};