import {StyleSheet} from 'react-native';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import * as constant from '../../../../../shared/const/constant';
import commonColors from '../../../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
   marginRight:scale(10),
   width:scale(156),
   height:scale(54),
   borderRadius:scale(10),
   marginTop:scale(-20),

   shadowColor: commonColors.shadowColour,
   shadowOffset: {width: 0, height: 1},
   shadowOpacity: 0.4,
   elevation: 1,

  },
  imageStyle: {      
    height: scale(54),
    borderRadius:scale(10)
  },
  textStyle:{
      position:'absolute',
      paddingLeft: scale(50),
      paddingTop:scale(20),

  }
});

export default styles;
