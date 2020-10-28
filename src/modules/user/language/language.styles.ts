import {StyleSheet} from 'react-native';
import commonColors from '../../../shared/styles/colors';
import { scale } from '../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  Container: {
    borderColor:commonColors.mainColour,
    borderWidth:scale(10),  
  },
  textStyle:{
      marginTop:scale(18)
  },
  switchStyle:{
width:scale(300),
height:scale(53),
marginTop:scale(42),
marginLeft:scale(28)

  },
  footer:{
    marginTop:scale(162),
  }
  
});

export default styles;
