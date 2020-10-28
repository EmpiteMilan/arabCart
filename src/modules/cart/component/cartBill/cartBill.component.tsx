import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './cartBill.style';
import {ICartBill} from './cartBill.interface';
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
class CartBill extends Component<ICartBill, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {};
  render() {
    return (
      <View style={[flex1, container]}>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <View style={[flexDirectionRow, flex1]}>
            <Text style={[subTitle, fontSize16]}>Sub Total</Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16]}>$3.75</Text>
          </View>
        </View>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <View style={[flexDirectionRow, flex1]}>
            <Text
              style={[subTitle, fontSize16, colorGrey80888E, fontWeight800]}>
              Service Charge
            </Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16, colorGrey80888E, fontWeight800]}>
              $3.75
            </Text>
          </View>
        </View>
        <View style={[flexDirectionRow, totDetail, alignCenter]}>
          <View style={[flexDirectionRow, flex1]}>
            <Text
              style={[subTitle, fontSize18, colorRedE74747, fontWeightBold]}>
              Total
            </Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize18, colorRedE74747, fontWeightBold]}>
              $3.75
            </Text>
          </View>
        </View>
      </View>
    );
  }
}
export default connect()(CartBill);
