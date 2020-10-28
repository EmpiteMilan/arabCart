import React from 'react';
import {View, Text} from 'react-native';
import {IAuthHeader} from './authHeader.interface';
import defaultStyles from '../../styles/styles';
import styles from './authHeader.styles';
import {scale} from '../customized/utils/scale';

const {container, subtitle} = styles;

const {
  fontSize14,
  fontSize22,
  colorGray2D2D2D,
  colorGrayA1A3B5,
  alignSelfFlexStart,
} = defaultStyles;

const AuthHeader = (props: IAuthHeader) => {
  return (
    <View style={[alignSelfFlexStart, container]}>
      <Text style={[fontSize22, colorGray2D2D2D]}>{props.title}</Text>
      {props.subtitle !== undefined ? (
        <Text
          style={[
            fontSize14,
            colorGrayA1A3B5,
            subtitle,
            {marginTop: scale(2)},
          ]}>
          {props.subtitle}
        </Text>
      ) : null}
    </View>
  );
};

export {AuthHeader};
