import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import defaultStyles from '../../styles/styles';
import styles from './modelHeader.styles';
import {IModelHeader} from './modelHeader.interface';
import {BackButton} from '../../../shared/ui-components';
import {scale} from '../customized/utils/scale';

const filter = require('../../../assets/topbar/ic_filter.png');

import SVGNOTIFI from '../../../assets/topbar/notifi.svg';
import SVGSEARC from '../../../assets/topbar/search.svg';
import SVGFILTER from '../../../assets/topbar/ic_filter.svg';

const {
  flexDirectionRow,
  colorGray2D2D2D,
  fontSize20,
  alignCenter,
  fontWeightBold,
  alignSelfCenter,
  flex1,
  textAlignCenter,
  bgColorRed8E0025,
  colorWhite,
} = defaultStyles;
const {container, backButtonStyle, userLogoStyle} = styles;
const ModelHeader = (props: IModelHeader) => {
  return (
    <View
      style={[
        flexDirectionRow,
        container,
        alignCenter,
        bgColorRed8E0025,
        {alignItems: 'center'},
      ]}>
      <Text
        style={[
          fontSize20,
          colorWhite,
          fontWeightBold,

          flex1,
          textAlignCenter,
        ]}>
        {props.title}
      </Text>
      <View style={[backButtonStyle]}>
        <BackButton />
      </View>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <SVGSEARC width={scale(16)} height={scale(16)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <Image source={filter} />
      </TouchableOpacity>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <SVGNOTIFI width={scale(18)} height={scale(15)} />
      </TouchableOpacity>
    </View>
  );
};
export {ModelHeader};
