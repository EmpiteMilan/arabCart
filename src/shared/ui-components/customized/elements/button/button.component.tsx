import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {IButton} from './button.interface';

import defaultStyles from '../../../../styles/styles';
import styles from './button.styles';
import {
  BUTTON_COLOR,
  TEXT_COLOR,
  BUTTON_ICON_TYPE,
  BUTTON_FLEX_AMOUNT,
  BUTTON_FONT_SIZE,
  BORDER_COLOR,
} from './button.enum';
import {scale} from '../../utils/scale';
import {TouchableHighlight} from 'react-native-gesture-handler';

const {
  bgColorGrayEDEBF5,
  bgColorRed8E0025,
  bgColorPrimary,
  bgColorMain,
  bgColorSecondary,
  bgColorWhite,
  bgColorGreen,
  bgColorGrayF8F8F8,
  colorWhite,
  colorGreen,
  colorPrimary,
  colorGrayA9AAB2,
  colorGray707070,
  colorGrayBEC1D6,
  fontSize10,
  fontSize16,
  fontSize12,
  fontSize14,
  fontSize18,
  fontSize20,
  contentCenter,
  flex1,
  flexDirectionRow,
  borderColorGreen,
  borderColorGrayBEC1D6,
  borderColorMAinCOlor,
  colorRed480B14,
} = defaultStyles;
const {
  buttonLarge,
  buttonSmall,
  borderButton,
  iconText,
  buttonFontLarge,
  buttonFontSmall,
} = styles;

interface State {}

class ButtonCustom extends Component<IButton, State> {
  render() {
    const {
      buttonColor,
      textColor,
      textSize,
      size,
      onPress,
      title,
      count,
      border,
      flex,
      children,
      iconType,
      flexAmount,
      countEnable,
      fontSize,
      borderColor,
    } = this.props;
    let buttonStyle: Array<any> = [contentCenter];
    let textStyle: Array<any> = [colorWhite];
    let fontSizes: Array<any> = [fontSize12];

    let btnColor: Object =
      buttonColor === BUTTON_COLOR.YELLOW
        ? bgColorSecondary
        : buttonColor === BUTTON_COLOR.BLACK
        ? bgColorPrimary
        : buttonColor === BUTTON_COLOR.WHITE
        ? bgColorWhite
        : buttonColor === BUTTON_COLOR.GREEN
        ? bgColorGreen
        : buttonColor === BUTTON_COLOR.RED
        ? bgColorRed8E0025
        : buttonColor === BUTTON_COLOR.GREYF8F8F8
        ? bgColorGrayF8F8F8
        : buttonColor === BUTTON_COLOR.MAINCOLOR
        ? bgColorMain
        : bgColorWhite;
    buttonStyle.push(btnColor);

    let fontsSizes: object =
      fontSize === BUTTON_FONT_SIZE.TEN
        ? fontSize10
        : fontSize === BUTTON_FONT_SIZE.TWELVE
        ? fontSize12
        : fontSize === BUTTON_FONT_SIZE.FOURTEEN
        ? fontSize14
        : fontSize === BUTTON_FONT_SIZE.SIXTEEN
        ? fontSize16
        : fontSize === BUTTON_FONT_SIZE.EIGHTEEN
        ? fontSize18
        : fontSize === BUTTON_FONT_SIZE.TWENTY
        ? fontSize20
        : fontSize12;
    fontSizes.push(fontsSizes);

    let btnSize: Object = size === 'large' ? buttonLarge : buttonSmall;
    buttonStyle.push(btnSize);

    let borderBtn: Object = border ? borderButton : {};
    buttonStyle.push(borderBtn);

    let borderColors: object =
      borderColor === BORDER_COLOR.BLACK
        ? borderColorGreen
        : borderColor === BORDER_COLOR.GREEN
        ? borderColorGreen
        : borderColor === BORDER_COLOR.GRAY
        ? borderColorGreen
        : borderColor === BORDER_COLOR.GrayBEC1D6
        ? borderColorGrayBEC1D6
        : borderColor === BORDER_COLOR.MAINCOLOR
        ? borderColorMAinCOlor
        : borderColorGreen;
    buttonStyle.push(borderColors);

    let flexBtn: Object = flex
      ? flexAmount === BUTTON_FLEX_AMOUNT.TWO
        ? {flex: 2}
        : flex1
      : {};
    buttonStyle.push(flexBtn);

    let txtColor: Object =
      textColor === TEXT_COLOR.BLACK
        ? colorPrimary
        : textColor === TEXT_COLOR.GREEN
        ? colorGreen
        : textColor === TEXT_COLOR.GRAY
        ? colorGrayA9AAB2
        : textColor === TEXT_COLOR.GRAY707070
        ? colorGray707070
        : textColor === TEXT_COLOR.GRAYBEC1D6
        ? colorGrayBEC1D6
        : textColor === TEXT_COLOR.RED480B14
        ? colorRed480B14
        : colorWhite;
    textStyle.push(txtColor);

    let txtSize: Object =
      textSize === 'large' ? buttonFontLarge : buttonFontSmall;
    textStyle.push(txtSize);

    return (
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        {iconType === BUTTON_ICON_TYPE.ICONONLY ? (
          {...children}
        ) : iconType === BUTTON_ICON_TYPE.LEFTICON ? (
          <View style={flexDirectionRow}>
            {children}
            <Text style={[textStyle, iconText, fontsSizes]}>{title}</Text>
          </View>
        ) : (
          <View style={flexDirectionRow}>
            {children}
            <Text style={[textStyle, iconText, fontsSizes]}>{title}</Text>
            {countEnable ? (
              <Text style={[textStyle, fontsSizes, {marginLeft: scale(63)}]}>
                {count}
              </Text>
            ) : null}
          </View>
        )}
      </TouchableOpacity>
    );
  }
}
export {ButtonCustom as Button};
