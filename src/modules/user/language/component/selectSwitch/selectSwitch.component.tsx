import React from 'react';
import {View, Image} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import commonColors from '../../../../../shared/styles/colors';

import defaultStyles from '../../../../../shared/styles/styles';
import styles from './selectSwitch.styles';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import {ISelectSwitch} from './selectSwitch.interface';

const {alignSelfCenter, fontSize20} = defaultStyles;
const {Container} = styles;

const options = [
  {label: 'English', value: 1}, //images.feminino = require('./path_to/assets/img/feminino.png')
  {label: 'عربي', value: 2},
];

const SelectSwitch = (props: ISelectSwitch) => {
  const {lngId, onPress} = props;
  return (
    <View>
      <SwitchSelector
        initial={0}
        textColor={commonColors.black} //'#7a44cf'
        selectedColor={commonColors.white}
        buttonColor={commonColors.mainColour}
        borderColor={commonColors.mainColour}
        buttonMargin={scale(2)}
        bold={true}
        fontSize={scale(20)}
        height={scale(52)}
        borderRadius={100}
        style={Container}
        hasPadding
        options={options}
        onPress={(value) => onPress(value)}
      />
    </View>
  );
};

export {SelectSwitch};
