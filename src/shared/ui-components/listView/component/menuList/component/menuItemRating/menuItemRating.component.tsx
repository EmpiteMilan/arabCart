import React from 'react';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../../../styles/styles';
import styles from './menuItemRating.styles';
import {scale} from '../../../../../customized/utils/scale';
import {IMenuItemRating} from './menuItemRating.interface';
const {container, rightContainer,box} = styles;
const {fontWeightBold,fontWeight400,fontStyleItalic,fontSize12,fontSize8,flexDirectionRow,colorBlack444444} = defaultStyles;
const MenuItemRating = (props: IMenuItemRating) => {
  return (
    <View style={[container,flexDirectionRow]}>
      <View style={[box]}>
        <Text style={[fontWeightBold,fontSize12]}>{props.rating}</Text>
      </View>
      <View style={[rightContainer]}>
      <Text style={[fontSize12,colorBlack444444,fontWeight400]}>{props.ratingName}</Text>
      <Text style={[fontSize8,colorBlack444444,fontStyleItalic]}>{props.reviews}</Text>
      </View>
      {/* <Text style={[headline,fontWeightBold]}>{props.ratingName}</Text> */}
      {/* {props.subtitle !== undefined ? <Text style={[subtitle,fontWeightBold]}>{props.subtitle}</Text> : null} */}
    </View>
  );
};
export {MenuItemRating};
