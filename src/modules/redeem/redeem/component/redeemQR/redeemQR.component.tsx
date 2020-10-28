import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, Text} from 'react-native';
import defaultStyles from '../../../../../shared/styles/styles';
import {TopBar, Button, AuthHeader} from '../../../../../shared/ui-components';
import commonColors from '../../../../../shared/styles/colors';
import styles from './redeemQR.styles';
import {RedeemCard} from '../redeemCard/redeemCard.component';
import {ListView} from '../../../../../shared/ui-components/listView/listView.component';
import {LIST_TYPE} from '../../../../../shared/ui-components/listView/listView.enum';

import {menuItemConst} from '../../../../../shared/ui-components/listView/component/tableList/tableList.const';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {redeemCardConst} from '../redeemCard/redeemCard.const';
import SVGQRCODE from '../../../../../assets/redeem/free.svg';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import navigationService from '../../../../../navigation/navigationService';
import * as SCENES from '../../../../../navigation/NavigationRoute.const';
const {
  bgColorGrayF7F7F7,
  flexDirectionRow,
  flex1,
  flex2,
  flex4,
  bgColorWhite,
  flexWrap,
  alignSelfCenter,
} = defaultStyles;

const {titleContainer, cardContainer} = styles;
export interface Props {}

interface State {}
class RedeemQR extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {
    isSelected: false,
    redeemCardArray: redeemCardConst,
    qrCheck: false,
  };
  render() {
    const {redeemCardArray} = this.state;
    return (
      <View style={[flex1, bgColorWhite, titleContainer]}>
        {this.state.qrCheck === false ? (
          <AuthHeader
            title="Show My QR"
            subtitle="Show this qr code at the cashier to make an offline purchase."
          />
        ) : null}

        {this.state.qrCheck === false ? (
          <TouchableOpacity onPress={() => this.onPressQRCode()}>
            <View style={[alignSelfCenter]}>
              <SVGQRCODE width={scale(50)} height={scale(50)} />
            </View>
          </TouchableOpacity>
        ) : (
          <Button
            buttonColor="green"
            textColor="white"
            textSize="large"
            size="large"
            fontSize="16"
            title="Next"
            onPress={() => this.onPressNextButton()}
          />
        )}
      </View>
    );
  }
  onPressQRCode() {
    this.setState({
      qrCheck: true,
    });
  }
  onPressNextButton() {
    navigationService.navigate(SCENES.ROUTE_REDEEM_MENU_LIST, {});
  }
}
export default connect()(RedeemQR);
