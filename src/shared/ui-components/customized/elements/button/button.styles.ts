import {StyleSheet} from 'react-native';
import {scale} from '../../utils/scale';
import commonColors from '../../../../styles/colors';

const styles = StyleSheet.create({
  blockButton: {
    width: '100%',
  },

  buttonSmall: {
    borderRadius:scale(40),
    height: scale(28),
  },

  buttonFontSmall: {
    fontSize: 13,
    
  },
  buttonFontLarge: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  buttonLarge: {
    marginTop: scale(18),   
    height: scale(46),
  },

  borderButton: {
    borderWidth: scale(1),
    borderRadius:scale(10)
  },

  iconText: {
    marginLeft: scale(5),
  },
});

export default styles;
