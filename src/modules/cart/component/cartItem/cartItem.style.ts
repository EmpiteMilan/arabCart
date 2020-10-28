import {StyleSheet} from 'react-native';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../../../shared/styles/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: scale(14),
    marginLeft: scale(23),
    marginBottom: scale(14),
  },
  title: {
    paddingLeft: scale(18),
  },
  subDetail: {
    marginLeft: scale(42),
    width: scale(312),
    marginBottom: scale(23),
  },
  subTitle: {
    paddingLeft: scale(5),
  },
  price: {
    textAlign: 'right',
  },
});

export default styles;
