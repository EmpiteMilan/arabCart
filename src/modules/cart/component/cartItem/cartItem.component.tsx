import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './cartItem.style';
import {ICartItem} from './cartItem.interface';
import SVGREMOVE from '../../../../assets/order/remove.svg';
import SVGREMOVEGREY from '../../../../assets/order/removeGrey.svg';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';

const {
  flex1,
  alignSelfCenter,
  fontSize20,
  fontSize16,
  colorBlack444444,
  fontWeightBold,
  fontWeight800,
  bgColorWhite,
  flexDirectionRow,
  alignCenter,
  alignSelfFlexEnd,
  colorGrey80888E,
  colorGreen5EB217,
} = defaultStyles;
const {container, title, subDetail, subTitle, price} = styles;
interface State {}
class CartItem extends Component<ICartItem, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {};
  render() {
    return (
      <View style={[flex1]}>
        <View style={[flexDirectionRow, container, alignCenter]}>
          <TouchableOpacity>
            <View>
              <SVGREMOVE width={scale(26)} height={scale(26)} />
            </View>
          </TouchableOpacity>
          <Text style={[title, fontSize20, colorBlack444444]}>Cappuccino</Text>
        </View>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <TouchableOpacity>
            <View>
              <SVGREMOVEGREY width={scale(26)} height={scale(26)} />
            </View>
          </TouchableOpacity>
          <View style={[flexDirectionRow, flex1]}>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>1</Text>
            <Text style={[subTitle, fontSize16, colorGreen5EB217]}>x</Text>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>Small</Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16]}>$3.75</Text>
          </View>
        </View>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <TouchableOpacity>
            <View>
              <SVGREMOVEGREY width={scale(26)} height={scale(26)} />
            </View>
          </TouchableOpacity>
          <View style={[flexDirectionRow, flex1]}>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>1</Text>
            <Text style={[subTitle, fontSize16, colorGreen5EB217]}>x</Text>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>Small</Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16]}>$3.75</Text>
          </View>
        </View>
        <View style={[flexDirectionRow, subDetail, alignCenter]}>
          <TouchableOpacity>
            <View>
              <SVGREMOVEGREY width={scale(26)} height={scale(26)} />
            </View>
          </TouchableOpacity>
          <View style={[flexDirectionRow, flex1]}>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>1</Text>
            <Text style={[subTitle, fontSize16, colorGreen5EB217]}>x</Text>
            <Text style={[subTitle, fontSize16, colorGrey80888E]}>Small</Text>
          </View>
          <View style={[{}]}>
            <Text style={[fontSize16]}>$3.75</Text>
          </View>
        </View>
      </View>
    );
  }
}
export default connect()(CartItem);
