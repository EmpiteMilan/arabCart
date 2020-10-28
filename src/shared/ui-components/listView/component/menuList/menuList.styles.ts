import {StyleSheet} from 'react-native';
import {scale} from '../../../customized/utils/scale';
import commonColors from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    width: scale(332),
    height: scale(211),
    marginRight: scale(22),
    marginLeft: scale(23),
    marginBottom: scale(20),
    backgroundColor: commonColors.white,
  },

  imageStyle: {
    width: scale(330),
    height: scale(162),
    position: 'relative',
  },
  buttonContainer:{
    width: scale(98),
    height: scale(28),
    marginLeft: scale(114),
    marginTop:scale(10),
    marginBottom:scale(10),
  }
});

export default styles;
