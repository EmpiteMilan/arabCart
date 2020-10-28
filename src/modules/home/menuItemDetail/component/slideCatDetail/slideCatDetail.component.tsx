import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {ISlideCatDetail} from './slideCatDetail.interface';

import defaultStyles from '../../../../../shared/styles/styles';
import styles from './slideCatDetail.styles';

export interface Props {}
const {colorWhite, fontSize14, textAlignCenter} = defaultStyles;
const {container, imageStyle, textStyle} = styles;

const SlideCatDetail = (props: ISlideCatDetail) => {
  const {name, img} = props.category;

  return (
    <View style={[container]}>
      <Image source={{uri: img}} style={imageStyle} />
      <View style={[textStyle]}>
        <Text style={[textAlignCenter, fontSize14, colorWhite]}>{name}</Text>
      </View>
    </View>
  );
};

export {SlideCatDetail};
