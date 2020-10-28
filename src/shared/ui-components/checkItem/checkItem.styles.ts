import {StyleSheet} from 'react-native';
import {scale} from '../customized/utils/scale';
import commonColors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: scale(9),
    marginBottom: scale(9),
    width: scale(331),
  },
  checkBoxStyle: {
    width: scale(28),
    height: scale(28),
    marginRight: scale(23),
  },
  borderCheckBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: commonColors.grayA1A3B5,
  },
  backgroundCheckBox: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: commonColors.grayA1A3B5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  spinnerView: {
    marginLeft: scale(75),
  },
});

export default styles;
