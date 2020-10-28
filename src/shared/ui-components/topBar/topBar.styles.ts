import {StyleSheet} from 'react-native';
import {scale} from '../../../shared/ui-components/customized/utils/scale';

const styles = StyleSheet.create({
  container: {
    paddingLeft: scale(20),
    paddingRight: scale(23),
    paddingTop: scale(10),
    paddingBottom: scale(10),
  },
  menuSliderStyle:{
    width: scale(23),
    height: scale(15),
    marginRight: scale(20),
  },
  restaurantLogoStyle: {
    width: scale(50),
    height: scale(35),
    marginRight: scale(100),
  },
  filterStyle:{
    width: scale(16),
    height: scale(16),
  },

  notificationLogoStyle: {
    width: scale(30),
    height: scale(30),
  },
  userLogoStyle: {
    width: scale(30),
    height: scale(30),
  },
});

export default styles;
