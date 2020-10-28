import {StyleSheet} from 'react-native';
import {scale} from '../../../customized/utils/scale';
import commonColors from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {   
    height: scale(170),   
    marginBottom: scale(8),
    backgroundColor: commonColors.black,
    borderRadius:scale(10)
  },
  imageStyle: {   
    width:scale(380), 
    height: scale(170),
    borderRadius:scale(10)
  },
  imgButton: {
    alignSelf: 'flex-end',
    marginTop: scale(20),
  },
});
export default styles;
