import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import defaultStyles from '../../../../shared/styles/styles';
import styles from './forgotPasswordButton.styles';

const {
  fontSize18,
  colorGaryA1A3B5,
  alignSelfCenter,
  colorBlack,
} = defaultStyles;
const {container} = styles;

const ForgoPasswordButton = () => {
  return (
    <TouchableOpacity style={[container, alignSelfCenter]}>
      <Text style={[fontSize18, colorBlack]}>Sign Up</Text>
    </TouchableOpacity>
  );
};

export {ForgoPasswordButton};
