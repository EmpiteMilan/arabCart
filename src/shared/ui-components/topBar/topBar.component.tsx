import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const menuSlider = require('../../../assets/common/menuslider.png');
const restaurantLogo = require('../../../assets/common/logopng.png');
const filter = require('../../../assets/topbar/ic_filter.png');

import defaultStyles from '../../../shared/styles/styles';
import styles from './topBar.styles';
import {ITopBar} from './topBar.interface';
import {scale} from '../../../shared/ui-components/customized/utils/scale';

import SVGNOTIFI from '../../../assets/topbar/notifi.svg';
import SVGSEARC from '../../../assets/topbar/search.svg';
import SVGFILTER from '../../../assets/topbar/ic_filter.svg';

const {
  flexDirectionRow,
  spaceBetween,
  bgColorWhite,
  bgColorRed8E0025,
  colorGray2D2D2D,
  colorGaryA1A3B5,
  fontSize12,
  fontSize25,
  alignCenter,
  fontWeightBold,
  contentCenter,
  colorWhite,
} = defaultStyles;

const {
  container,
  restaurantLogoStyle,
  userLogoStyle,
  notificationLogoStyle,
  menuSliderStyle,
  filterStyle,
} = styles;

const TopBar = (props: ITopBar) => {
  const {name, onPress, restaurantName} = props;
  return (
    <View
      style={[
        flexDirectionRow,
        spaceBetween,
        container,
        bgColorRed8E0025,
        alignCenter,
      ]}>
      <View style={[flexDirectionRow, contentCenter]}>
        <Image source={menuSlider} style={menuSliderStyle} />
        <View style={[contentCenter]}>
          <Image source={restaurantLogo} style={restaurantLogoStyle} />
        </View>
      </View>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <SVGSEARC width={scale(20)} height={scale(21)} />
      </TouchableOpacity>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <Image source={filter} style={filterStyle} />
      </TouchableOpacity>
      <TouchableOpacity onPress={null} style={{marginLeft: scale(30)}}>
        <SVGNOTIFI width={scale(19)} height={scale(19)} />
      </TouchableOpacity>
    </View>
  );
};

export {TopBar};
