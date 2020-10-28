import colors from './colors';
import {StyleSheet, Dimensions, Platform} from 'react-native';
import commonColors from './colors';
import {scale} from '../ui-components/customized/utils/scale';

const {height, width} = Dimensions.get('window');

export const defaultStyles = StyleSheet.create({
  //Flex
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },

  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },

  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },

  flexGrow1: {
    flexGrow: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  flexNoWrap: {
    flexWrap: 'nowrap',
  },
  flexWrapreverse: {
    flexWrap: 'wrap-reverse',
  },

  flexDirectionRow: {
    flexDirection: 'row',
  },

  alignCenter: {
    alignItems: 'center',
  },

  justifyCenter: {
    justifyContent: 'center',
  },

  contentCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  justifyFlexEnd: {
    justifyContent: 'flex-end',
  },

  alignSelfFlexStart: {
    alignSelf: 'flex-start',
  },

  alignSelfCenter: {
    alignSelf: 'center',
  },

  alignSelfFlexEnd: {
    alignSelf: 'flex-end',
  },

  spaceBetween: {
    justifyContent: 'space-between',
  },

  textAlignCenter: {
    textAlign: 'center',
  },

  //Container

  containerGray: {
    backgroundColor: commonColors.grayF7F7F7,
  },
  containerWhite: {
    backgroundColor: commonColors.white,
    flex: 1,
  },

  authWrapper: {
    backgroundColor: commonColors.white,
    paddingLeft: scale(28),
    paddingRight:scale(28)
  
  },

  borderContainer:{
    borderColor:commonColors.mainColour,
    borderWidth:scale(10), 
  },

 

  //Colors
bgColorMain:{
  backgroundColor: commonColors.mainColour,
},

bgColorRed450E14:{
  backgroundColor: commonColors.red450E14,
},
bgColorRed8E0025:{
backgroundColor:commonColors.red8E0025,
},

  bgColorWhite: {
    backgroundColor: commonColors.white,
  },

  bgColorPrimary: {
    backgroundColor: commonColors.primary,
  },

  bgColorSecondary: {
    backgroundColor: commonColors.secondary,
  },

  bgColorGrayF7F7F7: {
    backgroundColor: commonColors.grayF7F7F7,
  },
  bgColorGreen: {
    backgroundColor: commonColors.green,
  },
  bgColorGrayEDEBF5: {
    backgroundColor: commonColors.grayEDEBF5,
  },
  bgColorGreen5ED1AD: {
    backgroundColor: commonColors.green5ED1AD,
  },
  bgColorGrayFBFBFB: {
    backgroundColor: commonColors.grayFBFBFB,
  },
  bgColorGrayF8F8F8: {
    backgroundColor: commonColors.grayF8F8F8,
  },
  bgColorF0F0F0: {
    backgroundColor: commonColors.grayF0F0F0,
  },
  colorPrimary: {
    color: commonColors.primary,
  },

  colorSecondary: {
    color: commonColors.secondary,
  },

  colorRed480B14:{
color:commonColors.red480B14
  },

  colorWhite: {
    color: commonColors.white,
  },
  colorGreen: {
    color: commonColors.green,
  },
  colorBlack: {
    color: commonColors.black222222,
  },
  colorBlack444444: {
    color: commonColors.black444444,
  },
  colorBlack2C2C2C: {
    color: commonColors.black2C2C2C,
  },
  colorGray2D2D2D: {
    color: commonColors.gray2D2D2D,
  },
  colorGray7E7E7E: {
    color: commonColors.gray7E7E7E,
  },

  colorGray949494:{
    color:commonColors.gray949494
  },

  colorGrayA1A3B5: {
    color: commonColors.grayA1A3B5,
  },
  colorGaryA1A3B5: {
    color: commonColors.grayA1A3B5,
  },
  colorGray353B49: {
    color: commonColors.grey353B49,
  },
  colorGray262628: {
    color: commonColors.gray262628,
  },
  colorGray0F0F2C: {
    color: commonColors.gray0F0F2C,
  },
  colorGray525362: {
    color: commonColors.gray525362,
  },
  colorGrayA9AAB2: {
    color: commonColors.grayA9AAB2,
  },
  colorGray707070: {
    color: commonColors.gray707070,
  },
  colorGrayBEC1D6: {
    color: commonColors.grayBEC1D6,
  },

  colorRedE74747: {
    color: commonColors.redE74747,
  },
  colorGrey80888E: {
    color: commonColors.grey80888E,
  },
  colorGreen5EB217: {
    color: commonColors.green5EB217,
  },

  //border

  borderColorGreen: {
    borderColor: commonColors.green,
  },
  borderColorGrayBEC1D6: {
    borderColor: commonColors.grayBEC1D6,
  },
  borderColorMAinCOlor:{
    borderColor: commonColors.mainColour
  },

  borderRadius10: {
    borderRadius: scale(10),
  },

  //Fonts
  fontSize8: {
    fontSize: scale(8),
  },
  fontSize10: {
    fontSize: scale(10),
  },
  fontSize11: {
    fontSize: scale(11),
  },

  fontSize12: {
    fontSize: scale(12),
  },

  fontSize13: {
    fontSize: scale(13),
  },

  fontSize14: {
    fontSize: scale(14),
  },

  fontSize15: {
    fontSize: scale(15),
  },

  fontSize16: {
    fontSize: scale(16),
  },

  fontSize18: {
    fontSize: scale(18),
  },
  fontSize19: {
    fontSize: scale(19),
  },
  fontSize20: {
    fontSize: scale(20),
  },

  fontSize22: {
    fontSize: scale(22),
  },
  fontSize25: {
    fontSize: scale(25),
  },

  fontSize30: {
    fontSize: scale(30),
  },

  // fontWeight
  fontWeightBold: {
    fontWeight: 'bold',
  },
  fontWeight400: {
    fontWeight: '400',
  },
  fontWeight800: {
    fontWeight: '800',
  },
  fontStyleItalic: {
    fontStyle: 'italic',
  },

  fontFamilyBold: {
    fontFamily: 'Roboto-Bold',
  },
  fontFamilyRegular: {
    fontFamily: 'Roboto-Regular',
  },
  fontFamilyMedium: {
    fontFamily: 'Roboto-Medium',
  },

  ActivityInForPrimaryBtn: {
    marginVertical: 30,
  },


  marginTop32:{
    marginTop:scale(12)
  },
  marginTop15:{
    marginTop:scale(20)
  },
  paddingTop5:{
    paddingTop:scale(5)
  },
});

export default defaultStyles;
