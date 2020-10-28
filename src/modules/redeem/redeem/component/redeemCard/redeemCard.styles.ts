import {StyleSheet} from 'react-native';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../../../../shared/styles/colors';

const styles = StyleSheet.create({
  titleContainer: {
    marginLeft: scale(23),
  },
  activeCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: commonColors.redFFEBEB,
    marginRight: scale(10),
    marginBottom: scale(10),
  },
  inactiveCard: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    backgroundColor: commonColors.grayF8F8F8,
    marginRight: scale(10),
    marginBottom: scale(10),
  },
  min: {
    width: scale(75),
    height: scale(75),
  },
});

export default styles;
