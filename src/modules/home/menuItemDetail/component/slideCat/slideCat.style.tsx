import {StyleSheet} from 'react-native';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import * as constant from '../../../../../shared/const/constant';

const styles = StyleSheet.create({
  container: {
    paddingBottom: scale(7),
    paddingTop: scale(22),
    marginLeft: scale(constant.containerPadding),
    marginRight: scale(constant.containerPadding),
  },
});

export default styles;
