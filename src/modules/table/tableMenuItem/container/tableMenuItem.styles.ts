import {StyleSheet} from 'react-native';
import commonColors from '../../../../shared/styles/colors';
import { scale } from '../../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  listItemContainer: {
    paddingTop: scale(30),
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
