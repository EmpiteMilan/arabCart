import React from 'react';
import {View, Image, Text} from 'react-native';

import defaultStyles from '../../../../../shared/styles/styles';
import {IMainCategoryItem} from './categoryItem.interface';
import styles from './categoryItem.styles';

const {
  alignSelfCenter,
  bgColorMain,
  bgColorRed450E14,
  bgColorWhite,
  contentCenter,
  paddingTop5,
  colorWhite,
  fontSize14,
} = defaultStyles;
const {cardSize} = styles;

//assest
import SVGLPERPUME from '../../../../../assets/category/ladyperfume.svg';
import SVGLWATC from '../../../../../assets/category/ladywatch.svg';
import SVGLBAG from '../../../../../assets/category/ladybag.svg';

import SVGLFOOT from '../../../../../assets/category/lf.svg';
import SVGLLADY from '../../../../../assets/category/ll.svg';
import SVGLDRESS from '../../../../../assets/category/dreslady.svg';

import SVGQWEDDING from '../../../../../assets/category/wedding.svg';
import SVGJEANS from '../../../../../assets/category/jeans.svg';
import SVGJW from '../../../../../assets/category/jw.svg';

import SVGBP from '../../../../../assets/category/bp.svg';
import SVGBW from '../../../../../assets/category/bw.svg';
import SVGBS from '../../../../../assets/category/bs.svg';

import SVGBJ from '../../../../../assets/category/bj.svg';
import SVGBM from '../../../../../assets/category/bm.svg';
import SVGBT from '../../../../../assets/category/bt.svg';

import SVGBSH from '../../../../../assets/category/bsh.svg';
import SVGBSO from '../../../../../assets/category/bso.svg';
import SVGBSU from '../../../../../assets/category/bsu.svg';

import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import {TouchableOpacity} from 'react-native-gesture-handler';

const MainCategoryItems = (props: IMainCategoryItem) => {
  const {colour, imageName, title, onPress} = props;
  return (
    <TouchableOpacity onPress={(title) => onPress(props.title)}>
      <View style={[cardSize, title === '' ? bgColorWhite : bgColorRed450E14]}>
        <View style={[contentCenter, paddingTop5]}>
          {imageName === 'LADYPERFUME' ? (
            <SVGLPERPUME width={scale(49)} height={scale(49)} />
          ) : imageName === 'LADYWATCH' ? (
            <SVGLWATC width={scale(49)} height={scale(49)} />
          ) : imageName === 'LAdYHAND' ? (
            <SVGLBAG width={scale(49)} height={scale(49)} />
          ) : imageName === 'FOOTWEAR' ? (
            <SVGLFOOT width={scale(49)} height={scale(49)} />
          ) : imageName === 'LADY' ? (
            <SVGLLADY width={scale(60)} height={scale(67)} />
          ) : imageName === 'ess' ? (
            <SVGLDRESS width={scale(49)} height={scale(49)} />
          ) : imageName === 'WEDDING' ? (
            <SVGQWEDDING width={scale(49)} height={scale(49)} />
          ) : imageName === 'JEANS' ? (
            <SVGJEANS width={scale(49)} height={scale(49)} />
          ) : imageName === 'JEW' ? (
            <SVGJW width={scale(49)} height={scale(49)} />
          ) : imageName === 'BP' ? (
            <SVGBP width={scale(49)} height={scale(49)} />
          ) : imageName === 'BW' ? (
            <SVGBW width={scale(49)} height={scale(49)} />
          ) : imageName === 'BS' ? (
            <SVGBS width={scale(49)} height={scale(49)} />
          ) : imageName === 'BJ' ? (
            <SVGBJ width={scale(49)} height={scale(49)} />
          ) : imageName === 'BM' ? (
            <SVGBM width={scale(60)} height={scale(67)} />
          ) : imageName === 'BT' ? (
            <SVGBT width={scale(49)} height={scale(49)} />
          ) : imageName === 'BSH' ? (
            <SVGBSH width={scale(49)} height={scale(49)} />
          ) : imageName === 'BSO' ? (
            <SVGBSO width={scale(49)} height={scale(49)} />
          ) : imageName === 'BSU' ? (
            <SVGBSU width={scale(49)} height={scale(49)} />
          ) : null}
        </View>
        <View style={[contentCenter, paddingTop5]}>
          <Text style={[colorWhite, fontSize14]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export {MainCategoryItems};
