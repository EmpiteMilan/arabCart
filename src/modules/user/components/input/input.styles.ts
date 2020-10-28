import {StyleSheet} from 'react-native';
import commonColors from '../../../../shared/styles/colors';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  container: {
    marginTop: scale(19),
    elevation: 1,
    borderColor:commonColors.mainColour,
    borderWidth:scale(1),
    borderRadius:scale(8),
    height:scale(52)
  },
  labelStyle: {
    marginLeft: scale(8),
    marginRight:scale(18)
  },
  visibleIconStyle: {right: scale(12), bottom: scale(15), elevation: 10},
});

export default styles;
