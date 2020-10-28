import {StyleSheet} from 'react-native';
import {scale} from '../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: commonColors.white,
    paddingLeft: scale(20),
    paddingRight: scale(23),
    paddingTop: scale(10),
    paddingBottom: scale(10),
  },
  backButtonStyle: {
    position: 'absolute',
    left: scale(10),
  },
  userLogoStyle: {
    alignContent: 'center',
    marginLeft: scale(61),
    marginBottom: scale(8),
    marginTop: scale(7),
  },
});
export default styles;
