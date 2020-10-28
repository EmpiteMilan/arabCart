import React from 'react';
import {Text, View, Image} from 'react-native';

import defaultStyles from '../../../../../shared/styles/styles';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../../../../shared/styles/colors';
import {IHeaderImage} from './tableHeader.interface';
import styles from './tableHeader.styles';

const {fontSize25, fontWeightBold} = defaultStyles;
const {imageSize, imgContainer} = styles;

export interface Props {}

const TableHeaderImage = (props: IHeaderImage) => {
  return (
    <View style={[imgContainer]}>
      <Image
        source={require('../../../../../assets/table/tableHeader.png')}
        style={[imageSize]}
      />
    </View>
  );
};

export {TableHeaderImage};
