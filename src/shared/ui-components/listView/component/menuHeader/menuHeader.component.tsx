import React from 'react';
import {View, Text} from 'react-native';
import {IAuthHeader} from './menuHeader.interface';
import defaultStyles from '../../../../styles/styles';
import styles from './menuHeader.styles';
import { scale } from '../../../customized/utils/scale';
const {container} = styles;
const {
  fontSize15,
  fontSize22,
  colorGray2D2D2D,
  colorGray7E7E7E,
  fontWeightBold
} = defaultStyles;
const MenuHeader = (props: IAuthHeader) => {
  return (
    <View style={[ container,]}>
      <Text style={[fontSize22, colorGray2D2D2D,fontWeightBold]}>{props.title}</Text>
      {props.subtitle !== undefined ? (
        <Text style={[fontSize15, colorGray7E7E7E,]}>
          {props.subtitle}
        </Text>
      ) : null}
    </View>
  );
};
export {MenuHeader};
