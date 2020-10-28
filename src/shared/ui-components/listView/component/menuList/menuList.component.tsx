import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMenuListItem} from './menuList.interface';
const food_avatar = require('../../../../../assets/menu/breakfastmain.png');
import defaultStyles from '../../../../styles/styles';
import styles from './menuList.styles';
import {MenuItemPrice} from './component/menuItemPrice/menuItemPrice.component';
import {MenuItemFavourite} from './component/menuItemFavourite/menuItemFavourite.component';
import {CategoryName} from './component/categoryName/categoryName.component';
import {MenuItemName} from './component/menuItemName/menuItemName.components';
import {MenuItemRating} from './component/menuItemRating/menuItemRating.component';
import {Button} from '../../../customized/elements/button/button.component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import navigationService from '../../../../../navigation/navigationService';
const {fontSize10, fontWeightBold, flexDirectionRow} = defaultStyles;
const {container, imageStyle, buttonContainer} = styles;
import * as SCENES from '../../../../../navigation/NavigationRoute.const';
export interface Props {}
const MenuListItem = (props: IMenuListItem) => {
  const {
    title,
    description,
    cost,
    rating,
    ratingName,
    reviewCount,
  } = props.item;
  const {onPressItem, checked, mainTitle} = props;

  return (
    <View style={[container]}>
      <TouchableOpacity onPress={null}>
        <Image source={food_avatar} style={imageStyle} />
        <CategoryName title={mainTitle} />
        <MenuItemFavourite />
        <MenuItemPrice title={cost} />
        <MenuItemName title={title} subtitle={description} />
      </TouchableOpacity>
      <View style={[flexDirectionRow]}>
        {/* <Text style={[fontSize10, fontWeightBold]}>{title}</Text> */}
        <MenuItemRating
          rating={rating}
          ratingName={ratingName}
          reviews={reviewCount}
        />
        <View style={[buttonContainer]}>
          {checked ? (
            <Button
              buttonColor="white"
              textColor="green"
              textSize="small"
              size="small"
              border="true"
              title="Order Now"
              onPress={onPressItem}
            />
          ) : null}
        </View>
      </View>
    </View>
  );
};

export {MenuListItem};
