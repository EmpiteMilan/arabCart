import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './PaymentOption.style';
import {IPaymentOption} from './PaymentOption.interface';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
const {
  flex1,
  alignSelfCenter,
  fontSize20,
  fontSize16,
  fontSize18,
  colorRedE74747,
  fontWeightBold,
  fontWeight800,
  bgColorWhite,
  flexDirectionRow,
  alignCenter,
  alignSelfFlexEnd,
  colorGrey80888E,
  colorGreen5EB217,
} = defaultStyles;

const {container, title, subDetail, subTitle, totDetail} = styles;

interface State {}
class PaymentOption extends Component<IPaymentOption, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {};
  render() {
    return (
      <View style={[flex1, container]}>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <View style={[flexDirectionRow, flex1]}>
            <Text style={[subTitle, fontSize16]}>Pay at the counter</Text>
          </View>
        </View>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <View style={[flexDirectionRow, flex1]}>
            <Text
              style={[subTitle, fontSize16, colorGrey80888E, fontWeight800]}>
              Credit Card
            </Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16, colorGrey80888E, fontWeight800]}>
              $3.75
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default connect()(PaymentOption);
