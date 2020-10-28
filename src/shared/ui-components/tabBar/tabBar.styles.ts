import {StyleSheet} from 'react-native';
import {scale} from '../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../styles/colors';
import  {hasNotch} from '../../../shared/ui-components/customized/utils/plaform'
const styles = {
  // tabBarShadow: {    
  //   position: 'absolute',
  //   height: scale(49),
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   backgroundColor: commonColors.white,
  //   shadowColor: commonColors.black,
  //   shadowOffset: {width: 0, height: 4},
  //   shadowOpacity: 0.32,
  //   shadowRadius: 5.46,
  //   elevation: 9,
  // },

  tabBarWrapper: {
    height: scale(hasNotch() ? 83 : 49), //83 , 49
    flexDirection: 'row',
    elevation: 10,
  },

};
export default styles;
