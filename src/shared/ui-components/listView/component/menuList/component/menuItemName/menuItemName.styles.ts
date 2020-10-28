import {StyleSheet} from 'react-native';
import {scale} from '../../../../../customized/utils/scale';
import commonColors from '../../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height:scale(60),
    width: scale(380),    
    paddingTop: scale(10),
    paddingLeft: scale(11),
    paddingRight: scale(11),
    backgroundColor: 'rgba(50, 50, 50, 0.5)', 
    position: 'absolute',
    borderTopLeftRadius: scale(10),
    borderTopRightRadius: scale(10),
    shadowColor: commonColors.black605E5E,
    shadowOffset: {
      height: scale(98),
      width: scale(330),
    },
    shadowOpacity: 0.48,
    shadowRadius: 11.95,

  },

  headline: {
   
    color: commonColors.white,
  },
  subtitle: {
  
    color: commonColors.white,

  },
});

export default styles;
