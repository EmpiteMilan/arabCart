import {StyleSheet} from 'react-native';
import {scale} from '../../../customized/utils/scale';
import commonColors from '../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
marginBottom:scale(10),
    height: scale(121),
    borderRadius:scale(10),
     shadowColor: commonColors.shadowColour,
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.4,
    elevation: 1,
  },
  imageStyle: {
    width: scale(130),
    height: scale(121),
    marginRight: scale(9),
    borderRadius:scale(10),
  },
  imgButton: {
    alignSelf: 'flex-end',
    marginTop: scale(20),
  },
});
export default styles;
