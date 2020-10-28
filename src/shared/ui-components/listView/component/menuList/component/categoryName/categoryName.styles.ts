import {StyleSheet} from 'react-native';
import {scale} from '../../../../../customized/utils/scale';
import commonColors from '../../../../../../styles/colors';

const styles = StyleSheet.create({
  container: {
    height: scale(30),
    width: scale(380),   
    position: 'absolute',
    marginTop:scale(140),
    borderRadius:scale(5) ,// child
    paddingLeft: scale(11),
    paddingRight: scale(11),
    backgroundColor: 'rgba(50, 50, 50, 0.7)', 
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
    fontSize: 13,
    alignSelf: 'center',
    textAlign:'center',
    color: 'white',
    marginTop:scale(4),
    position: 'absolute', // child
  }
 
});

export default styles;
