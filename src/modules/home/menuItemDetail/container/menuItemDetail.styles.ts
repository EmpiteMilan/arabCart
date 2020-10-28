import {StyleSheet} from 'react-native';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../../../shared/styles/colors';
import * as constant from '../../../../shared/const/constant';
const styles = StyleSheet.create({
  catStyle: {
    
  },

  titleBox: {
    paddingLeft: scale(23),
    paddingRight: scale(21),
    paddingTop: scale(15),

  },
  optionBox: {
    paddingTop: scale(30),
    paddingLeft: scale(23),
    paddingRight: scale(21),
    paddingBottom: scale(20),
    width: scale(331),
  },
  line: {
    width: scale(394),
    height: scale(2),
    backgroundColor: commonColors.grayDADFE3,
    marginTop: scale(9),
  },
});

export default styles;
