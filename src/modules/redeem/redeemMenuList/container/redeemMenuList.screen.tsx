import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import {ListView} from '../../../../shared/ui-components/listView/listView.component';
import {redeemListConst} from './redeemItem.const';
import {LIST_TYPE} from '../../../../shared/ui-components/listView/listView.enum';
import navigationService from '../../../../navigation/navigationService';

import * as SCENES from '../../../../navigation/NavigationRoute.const';

const {flex1, bgColorWhite} = defaultStyles;

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
class RedeemItem extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {};
  render() {
    return (
      <View style={flex1}>
        <View>
          <ModelHeader title={'Coffee' + '  Menu'}></ModelHeader>
        </View>
        <View style={[flex1, bgColorWhite]}>
          <ListView
            listType={LIST_TYPE.REDEEM_MENU_LIST}
            data={redeemListConst}
            onPressItem={this.onPressRedeemItem}
          />
        </View>
      </View>
    );
  }

  onPressRedeemItem = (item: any, mainTitle: any) => {
    console.log(mainTitle);
    navigationService.navigate(SCENES.ROUTE_REDEEM_ITEM_DETAIL, {item});
  };
}
export default connect()(RedeemItem);
