import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, Text} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {TopBar, Button, Title} from '../../../../shared/ui-components';
import commonColors from '../../../../shared/styles/colors';
import styles from './redeem.styles';
import {RedeemCard} from '../component/redeemCard/redeemCard.component';
import {ListView} from '../../../../shared/ui-components/listView/listView.component';
import {LIST_TYPE} from '../../../../shared/ui-components/listView/listView.enum';
import {menuItemConst} from '../../../../shared/ui-components/listView/component/tableList/tableList.const';
import {ScrollView} from 'react-native-gesture-handler';
import {redeemCardConst} from '../component/redeemCard/redeemCard.const';
import RedeemQR from '../component/redeemQR/redeemQR.component';
import navigationService from '../../../../navigation/navigationService';

const {
  bgColorGrayF7F7F7,
  flexDirectionRow,
  flex1,
  flex2,
  flex4,
  bgColorWhite,
  flexWrap,
  containerGray,
} = defaultStyles;

const {titleContainer, cardContainer} = styles;

export interface Props {
  createOrder: () => void;
  createOrderPending: boolean;
  alertMessage: string;
  fireAlert: boolean;
  restaurantName: string;
  categories: Array<any>;
  onPressCategory: () => void;
}
interface State {}
class RedeemHome extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {
    isSelected: false,
    redeemCardArray: redeemCardConst,
    enable: false,
  };
  render() {
    const {redeemCardArray} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[containerGray]}></SafeAreaView>
        <View style={[flex1, bgColorWhite]}>
          <TopBar
            name={'userName'}
            onPress={null}
            restaurantName={'The Last Piece'}
          />
          <View style={[flexDirectionRow, bgColorWhite, titleContainer]}>
            <View style={[flex2]}>
              <Title title="Rewards" />
            </View>
            <View style={[{alignSelf: 'flex-end'}]}>
              <Button
                textColor={this.state.enable === true ? 'GrayBEC1D6' : 'green'}
                textSize="large"
                size="small"
                fontSize="16"
                border
                borderColor={
                  this.state.enable === true ? 'GrayBEC1D6' : 'green'
                }
                // borderColor="GrayBEC1D6"
                title=" Show My QR "
                onPress={() => this.onPressQrCodeShow()}
              />
            </View>
          </View>
          <ScrollView>
            <View
              style={[cardContainer, flexDirectionRow, bgColorWhite, flexWrap]}>
              {redeemCardArray.map((redeemCard, index) => {
                return (
                  <RedeemCard redeemCardArray={redeemCard} index={index} />
                );
              })}
            </View>
            {this.state.enable === true ? (
              <View>
                <RedeemQR />
              </View>
            ) : null}
          </ScrollView>
        </View>
      </Fragment>
    );
  }

  onPressQrCodeShow() {
    this.setState({
      enable: true,
    });
  }
}
export default connect()(RedeemHome);
