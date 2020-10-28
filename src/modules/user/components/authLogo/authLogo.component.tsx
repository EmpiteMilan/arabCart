import React from 'react';
import {View, Image} from 'react-native';

import defaultStyles from '../../../../shared/styles/styles';
import styles from './authLogo.styles';

const {alignSelfCenter} = defaultStyles;
const {imageSize} = styles;

const AuthLogo = () => {
  return (
    <View style={alignSelfCenter}>
      <Image
        source={require('../../../../assets/common/logo.png')}
        style={imageSize}
      />
    </View>
  );
};

export {AuthLogo};
