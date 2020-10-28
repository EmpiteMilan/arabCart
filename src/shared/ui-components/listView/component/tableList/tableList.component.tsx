import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {IMenuListItem} from '../menuList/menuList.interface';
const food_avatar = require('../../../../../assets/menu/breakfastmain.png');
import defaultStyles from '../../../../styles/styles';
import styles from './tableList.styles';
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
  fontSize20,
  colorGray949494,
  colorBlack,
  bgColorGreen,
} = defaultStyles;
const {container, imageStyle, imgButton} = styles;
import * as SCENES from '../../../../../navigation/NavigationRoute.const';
import {ITableListItem} from './tableList.interface';
import {scale} from '../../../customized/utils/scale';
import commonColors from '../../../../styles/colors';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {Button} from '../../..';
export interface Props {}
const TableListItem = (props: ITableListItem) => {
  const {id, title, description, cost, img} = props.item;
  const {onPressItem, checked} = props;
  const {index} = props;
  return (
    <View style={[flexDirectionRow, flex1, container, bgColorWhite]}>
      <View style={[flexDirectionRow, flex6]}>
        <Image source={{uri: img}} style={imageStyle} resizeMode="cover" />
        <View style={[]}>
          <Text
            style={[
              fontSize20,
              {
                marginLeft: scale(136),
                marginTop: scale(5),
              },
            ]}>
            {cost}
          </Text>
          <Text
            style={[
              fontSize16,
              alignSelfFlexStart,
              colorBlack,
              {marginTop: scale(10), marginLeft: scale(10)},
            ]}>
            {title}
          </Text>
        </View>
      </View>
      <View style={[{marginRight: scale(10), marginTop: scale(5)}]}>
        <Text style={[fontSize20, colorGray949494, {textAlign: 'right'}]}>
          QAR
        </Text>
        <View
          style={[
            {
              marginTop: scale(50),
              marginLeft: scale(25),
              width: scale(147),
              height: scale(29),
            },
          ]}>
          <Button
            buttonColor="red"
            textColor="white"
            textSize="small"
            fontSize="16"
            size="small"
            title="Add to Cart"
            onPress={() => this.onPressSignIn()}
          />
        </View>
      </View>
    </View>
  );
};
export {TableListItem};
