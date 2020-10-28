import {StyleSheet} from 'react-native';
import {scale} from '../../../../../customized/utils/scale';
import commonColors from '../../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(26),
    width: scale(46),
    backgroundColor: commonColors.redFF3300,
    marginTop:scale(11),
    marginLeft:scale(273),
    position: 'absolute',
    borderRadius:scale(5) // child
  },
  headline: {
    fontSize: 16,
    alignSelf: 'center',
    textAlign:'center',
    color: 'white',
    marginTop:scale(2),
    position: 'absolute', // child
  }
 
});

export default styles;
