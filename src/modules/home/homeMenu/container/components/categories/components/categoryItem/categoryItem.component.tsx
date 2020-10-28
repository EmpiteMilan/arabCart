import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ICategoryItem} from './categoryItem.interface';

import defaultStyles from '../../../../../../../../shared/styles/styles';
import styles from './categoryItem.styles';
import {scale} from '../../../../../../../../shared/ui-components/customized/utils/scale';

const {
  contentCenter,
  fontSize12,
  colorGray353B49,
  fontWeightBold,
  containerGray,
  colorGreen,
  colorBlack,
  flex1,
} = defaultStyles;
const {
  container,
  buttonContainer,
  imageStyle,
  greenBorder,
  grayBorder,
  selectedBottomBorder,
} = styles;

const comboCat1 = require('../../../../../../../../assets/menu/coffee.png');
const comboCat2 = require('../../../../../../../../assets/menu/breakfast.png');
const comboCat3 = require('../../../../../../../../assets/menu/lunch.png');
const comboCat4 = require('../../../../../../../../assets/menu/pizza.png');
const comboCat5 = require('../../../../../../../../assets/menu/beer.png');
const comboCat1Selected = require('../../../../../../../../assets/menu/coffee.png');
const comboCat2Selected = require('../../../../../../../../assets/menu/breakfast.png');
const comboCat3Selected = require('../../../../../../../../assets/menu/lunch.png');
const comboCat4Selected = require('../../../../../../../../assets/menu/pizza.png');
const comboCat5Selected = require('../../../../../../../../assets/menu/beer.png');

export interface Props {}

const CategoryItem = (props: ICategoryItem) => {
  const {category, index, onPress} = props;

  let buttonStyle: Array<any> = [];
  let buttonBgColor: Object =
    category.isSelected !== undefined && category.isSelected
      ? containerGray
      : {};
  let buttonBorderColor: Object =
    category.isSelected !== undefined && category.isSelected
      ? greenBorder
      : grayBorder;
  buttonStyle.push(buttonBgColor);
  buttonStyle.push(buttonBorderColor);

  return (
    <View style={[container]}>
      <TouchableOpacity
        style={[buttonContainer, contentCenter, buttonStyle]}
        onPress={() => onPress(index)}>
        <Image
          source={
            category.isSelected !== undefined && category.isSelected
              ? index === 0
                ? comboCat1Selected
                : index === 1
                ? comboCat2Selected
                : index === 2
                ? comboCat3Selected
                : index === 3
                ? comboCat4Selected
                : index === 4
                ? comboCat5Selected
                : index === 5
              : index === 0
              ? comboCat1
              : index === 1
              ? comboCat2
              : index === 2
              ? comboCat3
              : index === 3
              ? comboCat4
              : index === 4
              ? comboCat5
              : index === 5
          }
          style={imageStyle}
          resizeMode="center"
        />
        <Text
          style={[
            fontWeightBold,
            fontSize12,
            colorBlack,
            category.isSelected !== undefined && category.isSelected
              ? colorGreen
              : colorGray353B49,
          ]}>
          {category.name}
        </Text>
        <Text style={[fontSize12, colorBlack]}>{category.dec}</Text>
      </TouchableOpacity>
    </View>
  );
};

export {CategoryItem};
