import React from 'react';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../../../styles/styles';
import styles from './categoryName.styles';
import {scale} from '../../../../../customized/utils/scale';
import {IcategoryName} from './categoryName.interface';

import SVGCLOCK from '../../../../../../../assets/common/clock.svg';

const {container, headline} = styles;

const {
  fontWeightBold,
  flexDirectionRow,
  contentCenter,
  fontSize14,
} = defaultStyles;
const CategoryName = (props: IcategoryName) => {
  return (
    <View style={[container, flexDirectionRow]}>
      <View
        style={[
          contentCenter,
          {marginRight: scale(80), marginLeft: scale(180)},
        ]}>
        <SVGCLOCK width={scale(15)} height={scale(15)} />
      </View>
      <View style={[contentCenter, {marginRight: scale(70)}]}>
        <Text style={[headline, fontWeightBold, fontSize14]}>{props.time}</Text>
      </View>
    </View>
  );
};
export {CategoryName};
