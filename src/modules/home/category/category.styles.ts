import {StyleSheet} from 'react-native';
import commonColors from '../../../shared/styles/colors';
import { scale } from '../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  rowContainer:{
    marginTop:scale(20),
    marginLeft:scale(18),
    marginRight:scale(24)
  },
  rowSecondContainer:{
    marginTop:scale(15),
    marginLeft:scale(18),
    marginRight:scale(24)
  },
  imageSize:{
    width:scale(244),
    height:scale(108)
  }

  
});

export default styles;
