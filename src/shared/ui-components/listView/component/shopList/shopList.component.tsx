import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMenuListItem} from '../menuList/menuList.interface';
const food_avatar = require('../../../../../assets/menu/breakfastmain.png');
import defaultStyles from '../../../../styles/styles';
import styles from './shopList.styles';
import SVGOrder from '../../../../../assets/table/order.svg';
const {
  fontSize11,
  fontSize16,
  alignSelfFlexStart,
  flexDirectionRow,
  bgColorF0F0F0,
  bgColorWhite,
  flex1,
  flex2,
  flex4,
  flex6,
} = defaultStyles;
const {container, imageStyle, imgButton} = styles;
import * as SCENES from '../../../../../navigation/NavigationRoute.const';
import {ITableListItem} from './shopList.interface';
import {scale} from '../../../customized/utils/scale';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {CategoryName} from '../menuList/component/categoryName/categoryName.component';
import {MenuItemName} from '../menuList/component/menuItemName/menuItemName.components';
import {MenuItemPrice} from '../menuList/component/menuItemPrice/menuItemPrice.component';
export interface Props {}
const ShopListItem = (props: ITableListItem) => {
  const {id, title, description, cost, image, time} = props.item;
  const {onPressItem, checked} = props;
  const {index} = props;
  return (
    <View style={[container]}>
      <TouchableOpacity onPress={onPressItem}>
        <Image source={{uri: image}} style={imageStyle} resizeMode="stretch" />
        <MenuItemName title={title} subtitle={description} />
        <CategoryName time={time} />
      </TouchableOpacity>
    </View>
  );
};
export {ShopListItem};
