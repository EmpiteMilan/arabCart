import {StyleSheet} from 'react-native';
import commonColors from '../../styles/colors';
import { scale } from '../customized/utils/scale';

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
   
  },
  min: {
    width: scale(30),
    height: scale(28),
  },
  count: {
    width: scale(40),
    height: scale(28),
  },
  max: {
    width: scale(30),
    height: scale(28),
  },
  backgroundMinCheckBox: {   
    borderWidth: 1,
    borderColor: commonColors.grayDADFE3,
    justifyContent:'center',
    alignItems:'center',
    borderTopLeftRadius:scale(5),
    borderBottomLeftRadius:scale(5)
  },
  backgroundTextCheckBox: {   
    borderWidth: 1,
    borderColor: commonColors.grayDADFE3,
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundMaxCheckBox: {   
    borderWidth: 1,
    borderColor: commonColors.grayDADFE3,
    justifyContent:'center',
    alignItems:'center',
    borderTopRightRadius:scale(5),
    borderBottomRightRadius:scale(5)
  },
});

export default styles;
