import {Dimensions} from 'react-native';
const {width, height} = Dimensions.get('window');
import {DEVICE_TYPE} from './deviceType';

import {getDeviceType} from 'react-native-device-info';

export let deviceType = [''];


//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 375;
const guidelineBaseHeight = 812;

// const [shortDimension, longDimension] =
//   getDeviceType() === DEVICE_TYPE.HANDSET
//     ? [width, height]
//     : getDeviceType() === DEVICE_TYPE.TABLET && width < height
//     ? [width, height]
//     : [height, width];
// const [shortBaseWidth, longBaseHeight] =
//   getDeviceType() === DEVICE_TYPE.HANDSET
//     ? [guidelineBaseWidth, guidelineBaseHeight]
//     : [guidelineBaseHeight, guidelineBaseWidth];

const scale = (size) => (width / guidelineBaseWidth) * size;
const verticalScale = (size) => (height / guidelineBaseHeight) * size;
const moderateScale = (size, factor = 0.5) =>
  size + (scale(size) - size) * factor;

export {scale, verticalScale, moderateScale};
