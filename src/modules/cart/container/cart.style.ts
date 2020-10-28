import {StyleSheet} from 'react-native';
import commonColors from '../../../shared/styles/colors';
import { scale } from '../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  titleView: {
    marginTop: scale(14),
    marginBottom: scale(14),
  },
  line: {
    width: scale(394),
    height: scale(2),
    backgroundColor: commonColors.grayDADFE3,
    marginTop: scale(9),
  },
});

export default styles;
