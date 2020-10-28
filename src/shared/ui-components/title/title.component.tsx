import React from 'react';
import {Text, View} from 'react-native';

import defaultStyles from '../../../shared/styles/styles';
import { ITitle } from './title.interface';

const {fontSize25, fontWeightBold} = defaultStyles;

export interface Props {}

const Title = (props: ITitle) => {
  return (
    <View>
      <Text style={[fontSize25, fontWeightBold]}>{props.title}</Text>
    
    </View>
  );
};

export {Title};
