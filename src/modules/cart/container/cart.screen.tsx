import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {View, Text, ScrollView, SafeAreaView} from 'react-native';
import defaultStyles from '../../../shared/styles/styles';
import {ModelHeader} from '../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './cart.style';
import {ICart} from '../cart.interface';

import CartTitle from '../component/cartTitle/cartTitle.component';
import CartItem from '../component/cartItem/cartItem.component';
import CartBill from '../component/cartBill/cartBill.component';
import PaymentOption from '../component/paymentOption/PaymentOption.component';
import {Button} from '../../../shared/ui-components/customized/elements/button/button.component';

const {
  flex1,
  containerGray,
  bgColorWhite,
  bgColorGrayF8F8F8,
} = defaultStyles;

const {titleView, line} = styles;

interface State {}
class Cart extends Component<ICart, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {};
  render() {
    return (
      <Fragment>
        <SafeAreaView style={[containerGray]}></SafeAreaView>  
        <View style={[flex1, bgColorWhite]}>
        <View>
          <ModelHeader title={'Cart'}></ModelHeader>
        </View>
        <ScrollView>
          <View style={[bgColorGrayF8F8F8]}>
            <CartTitle />
          </View>
          <View>
            <CartItem />
          </View>
          <View style={[line]}></View>
          <View>
            <CartBill />
          </View>
          <View style={[line]}></View>
          <View>
            <PaymentOption />
          </View>
        </ScrollView>
        <Button
          buttonColor="green"
          textColor="white"
          textSize="large"
          size="large"
          fontSize="20"
          title="Order Now"
          onPress={null}
        />
      </View>
      </Fragment>
      
    );
  }
}
export default connect()(Cart);
