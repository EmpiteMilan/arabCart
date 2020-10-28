import {StyleSheet} from 'react-native';
import commonColors from '../../../../../../../../shared/styles/colors';
import {scale} from '../../../../../../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  container: {
    marginLeft: scale(8),
    marginRight: scale(8),
    marginBottom: scale(30),
  },

  selectedBottomBorder: {
    marginTop: scale(5),
    marginBottom: scale(5),
    height: scale(5),
    width: scale(70),
  },

  buttonContainer: {
    borderWidth: 1,
    borderRadius: 10,
    width: scale(118),
    height: scale(149),
    backgroundColor: commonColors.white,
  },

  greenBorder: {
    borderColor: commonColors.green5ED1AD,
  },

  grayBorder: {
    borderColor: commonColors.grayF0F0F0,
  },

  imageStyle: {
    width: scale(50),
    height: scale(50),
  },
});

export default styles;
