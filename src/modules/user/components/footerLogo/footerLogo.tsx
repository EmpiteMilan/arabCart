import React from 'react';
import {View, Image} from 'react-native';

import defaultStyles from '../../../../shared/styles/styles';
import styles from './footerLogo.styles';

const {alignSelfCenter} = defaultStyles;
const {imageSize} = styles;

const FooterLogo = () => {
  return (
    <View style={alignSelfCenter}>
      <Image
        source={require('../../../../assets/common/authFooter.png')}
        style={imageSize}
      />
    </View>
  );
};

export {FooterLogo};
