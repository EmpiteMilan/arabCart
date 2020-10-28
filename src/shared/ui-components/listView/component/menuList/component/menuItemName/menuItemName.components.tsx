import React from 'react';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../../../styles/styles';
import styles from './menuItemName.styles';
import {scale} from '../../../../../customized/utils/scale';
import {IMenuItemName} from './menuItemName.interface';

const {container, headline, subtitle} = styles;

const {fontWeightBold, fontSize25, fontSize14} = defaultStyles;
const MenuItemName = (props: IMenuItemName) => {
  return (
    <View style={[container]}>
      <Text style={[headline, fontSize25, fontWeightBold]}>{props.title}</Text>
      {props.subtitle !== undefined ? (
        <Text style={[subtitle, fontSize14, fontWeightBold]}>
          {props.subtitle}
        </Text>
      ) : null}
    </View>
  );
};
export {MenuItemName};
