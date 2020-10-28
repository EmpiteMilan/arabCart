import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, TouchableOpacity, Text} from 'react-native';
import defaultStyles from '../../../shared/styles/styles';
import styles from './inputSpinner.styles';
import SVGMin from '../../../assets/order/min.svg';
import SVGMax from '../../../assets/order/max.svg';
import {scale} from '../customized/utils/scale';

const {flexDirectionRow, fontSize19, fontWeightBold} = defaultStyles;

export interface Props {
  createOrder: () => void;
  createOrderPending: boolean;
  alertMessage: string;
  fireAlert: boolean;
  restaurantName: string;
  categories: Array<any>;
  onPressCategory: () => void;
}
const {
  container,
  min,
  count,
  max,
  backgroundMinCheckBox,
  backgroundTextCheckBox,
  backgroundMaxCheckBox,
} = styles;
interface State {}
class InputSpinner extends Component<Props, State> {
  state = {
    count: 0,
  };
  _incrementCount() {
    this.setState({
      count: this.state.count + 1,
    });
  }
  _decrementCount() {
    if (this.state.count === 0) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState(() => ({
        count: this.state.count - 1,
      }));
    }
  }
  render() {
    return (
      <View style={[flexDirectionRow, container]}>
        <TouchableOpacity
          style={[min, backgroundMinCheckBox]}
          onPress={() => this._decrementCount()}>
          <View>
            <SVGMin width={scale(20)} height={scale(15)} />
          </View>
        </TouchableOpacity>
        <View style={[count, backgroundTextCheckBox]}>
          <Text style={[fontSize19, fontWeightBold]}>{this.state.count}</Text>
        </View>
        <TouchableOpacity
          style={[max, backgroundMaxCheckBox]}
          onPress={() => this._incrementCount()}>
          <View>
            <SVGMax width={scale(20)} height={scale(15)} />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export {InputSpinner};
