//React Components
import React from 'react';
import {View, Text} from 'react-native';

//Components
import {TextInput, Button} from '../../../../shared/ui-components';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';

//Enum
import {BUTTON_TYPE} from '../../../../shared/ui-components/customized/elements/button/button.enum';

//Assets
import SVGUser from '../../../../assets/user/user.svg';
import SVGPassword from '../../../../assets/user/password.svg';

//Interfaces
import {IInput} from './input.interface';

//Styles
import defaultStyles from '../../../../shared/styles/styles';
import styles from './input.styles';

//colors
import commonColors from '../../../../shared/styles/colors';

const {
  flex1,
  flexDirectionRow,
  colorBlack1B0A31,
  fontSize15,
  positionAbsolute,
  contentCenter,
} = defaultStyles;

const {container, labelStyle, visibleIconStyle} = styles;

const Input = (props: IInput) => {
  const {
    placeholder,
    value,
    onChangeText,
    label,
    editable,
    secureTextEntry,
    onPressIcon,
    secureTextBtnVisible = false,
    keyboardType,
    customStyle,
    iconType,
  } = props;
  return (
    <View>
      <View style={[flexDirectionRow, container]}>
        <View style={[contentCenter, labelStyle]}>
          {iconType === 'UserName' ? (
            <SVGUser width={scale(22)} height={scale(23)} />
          ) : iconType === 'Password' ? (
            <SVGPassword width={scale(22)} height={scale(23)} />
          ) : null}
        </View>
        <View style={contentCenter}>
          <TextInput
            placeholder={placeholder}
            value={value}
            onChangeText={onChangeText}
            editable={editable}
            secureTextEntry={secureTextEntry}
            keyboardType={keyboardType}
            customStyle={customStyle}
          />
        </View>
      </View>
    </View>
  );
};

export {Input};
