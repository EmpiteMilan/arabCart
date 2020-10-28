import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './cartTitle.style';
import {ICartTitle} from './cartTitle.interface';
const {
  flex1,
  alignSelfCenter,
  fontSize25,
  fontSize16,
  colorRedE74747,
  fontWeightBold,
  fontWeight800,
  bgColorWhite,
} = defaultStyles;

const {titleView} = styles;

interface State {}
class CartTitle extends Component<ICartTitle, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {};
  render() {
    return (
      <View style={[titleView]}>
        <Text style={[alignSelfCenter, fontSize25, fontWeightBold]}>
          Order Summery
        </Text>
        <Text
          style={[alignSelfCenter, fontSize16, colorRedE74747, fontWeight800]}>
          Up To-40% Off
        </Text>
      </View>
    );
  }
}
export default connect()(CartTitle);
