import React from 'react';
import {TouchableOpacity} from 'react-native';

import navigationService from '../../../navigation/navigationService';

import SVGBack from '../../../assets/topbar/back.svg';
import {scale} from '../customized/utils/scale';

import defaultStyles from '../../../shared/styles/styles';
import styles from './backButton.styles';

const {contentCenter} = defaultStyles;
const {container} = styles;

export interface Props {}

const BackButton = (props: Props) => {
  return (
    <TouchableOpacity
      onPress={() => navigationService.goBack()}
      style={contentCenter}>
      <SVGBack width={scale(14)} height={scale(14)} />
    </TouchableOpacity>
  );
};

export {BackButton};
