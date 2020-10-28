import React, {Fragment} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const restaurantLogo = require('../../../../../../assets/common/large_logo.png');
import defaultStyles from '../../../../../../shared/styles/styles';
import styles from './calenderBar.styles';
import {ICalenderBar} from './calenderBar.interface';
import {scale} from '../../../../../../shared/ui-components/customized/utils/scale';
import SVGBookTable from '../../../../../../assets/common/booktable.svg';
import SVGHeart from '../../../../../../assets/topbar/heart.svg';
import {Search} from '../../../../../../shared/ui-components/search/search.component';

const {
  flexDirectionRow,
  spaceBetween,
  bgColorWhite,
  colorGray2D2D2D,
  colorGaryA1A3B5,
  fontSize12,
  fontSize18,
  alignCenter,
  flex1,
  flex2,
  flex3,
  fontSize10,
  flexGrow1,
} = defaultStyles;

const {container} = styles;
const CalenderBar = (props: ICalanderBar) => {
  const {onPress} = props;
  return (
    <View style={[flexDirectionRow, container, bgColorWhite, alignCenter]}>
      <View style={[flexDirectionRow, container]}>
        <TouchableOpacity onPress={null}>
          <SVGBookTable width={scale(42)} height={scale(40)} />
          <View style={[flexDirectionRow, bgColorWhite, alignCenter]}>
            <Text style={[fontSize10, {fontWeight: 'bold'}]}>Book Table</Text>
          </View>
        </TouchableOpacity>
      </View>

      <Fragment>
        <View style={[flex1]} />
        <Search />
      </Fragment>
    </View>
  );
};

export {CalenderBar};
