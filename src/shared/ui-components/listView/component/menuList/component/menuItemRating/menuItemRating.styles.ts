import {StyleSheet} from 'react-native';
import {scale} from '../../../../../customized/utils/scale';
import commonColors from '../../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(29),
    width: scale(94),
    marginLeft:scale(11),
    marginTop:scale(10),
    marginBottom:scale(10),
  },
  box:{
    height: scale(27),
    width: scale(32),
    backgroundColor:commonColors.grayF0F0F0,
    justifyContent:'center',
    alignItems:'center',
    borderRadius:scale(5),
   
  },

  rightContainer: {
    height: scale(29),
    width: scale(54),
    marginLeft:scale(8),
  
   
  },

});

export default styles;
