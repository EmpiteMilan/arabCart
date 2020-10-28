import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import defaultStyles from '../../../../shared/styles/styles';
import {TopBar} from '../../../../shared/ui-components';
import {categoriesConst} from '../../../home/homeMenu/container/components/categories/categories.const';
import {
  CalenderBar,
  Categories,
} from '../../../home/homeMenu/container/components';
import {TableHeaderImage} from '../component';
import {ListView} from '../../../../shared/ui-components/listView/listView.component';
import {menuItemConst} from '../../../../shared/ui-components/listView/component/tableList/tableList.const';
import {LIST_TYPE} from '../../../../shared/ui-components/listView/listView.enum';
import navigationService from '../../../../navigation/navigationService';

import * as SCENES from '../../../../navigation/NavigationRoute.const';

const {
  containerGray,
  bgColorGrayF7F7F7,
  bgColorWhite,
  authWrapper,
  flex1,
} = defaultStyles;

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
class TableDetail extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {
    isSelected: false,
    categories: categoriesConst,
  };
  render() {
    const {categories} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[bgColorGrayF7F7F7]}></SafeAreaView>
        <SafeAreaView style={[bgColorGrayF7F7F7, flex1]}>
          <TopBar
            name={'userName'}
            onPress={null}
            restaurantName={'The Last Piece'}
          />
          <View>
            <TableHeaderImage />
          </View>
          <CalenderBar onPress={null} />
          <KeyboardAwareScrollView contentContainerStyle={containerGray}>
            <View style={[bgColorWhite]}>
              <Categories categories={categories} onPress={null} />
            </View>
            <View style={[bgColorWhite]}>
              <ListView
                listType={LIST_TYPE.TABLE_LIST}
                data={menuItemConst}
                onPressItem={this.onPressItem}
              />
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
  onPressItem = (item: any, mainTitle: any) => {
    console.log(mainTitle);
    navigationService.navigate(SCENES.ROUTE_TABLE_MENU_ITEM, {item});
  };
}
const mapDispatchToProps = {};
export default connect()(TableDetail);
