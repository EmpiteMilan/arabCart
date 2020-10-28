import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import defaultStyles from '../../../../shared/styles/styles';
import {TopBar} from '../../../../shared/ui-components';
import {CalenderBar, Categories} from './components';
import {categoriesConst} from './components/categories/categories.const';
import {ListView} from '../../../../shared/ui-components/listView/listView.component';
import {LIST_TYPE} from '../../../../shared/ui-components/listView/listView.enum';
import {shopListConst} from '../../../../shared/ui-components/listView/component/shopList/shopList.const';
import navigationService from '../../../../navigation/navigationService';
import * as SCENES from '../../../../navigation/NavigationRoute.const';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
const {
  containerGray,
  bgColorGrayF7F7F7,
  bgColorWhite,
  authWrapper,
  flex1,
} = defaultStyles;
export interface Props {}
interface State {}
class HomeMenu extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {
    categories: categoriesConst,
    isSelected: false,
  };
  render() {
    const {categories} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[bgColorWhite, flex1]}>
          <TopBar />
          <KeyboardAwareScrollView contentContainerStyle={[bgColorWhite]}>
            <View
              style={[
                {
                  marginTop: scale(8),
                  marginRight: scale(10),
                  marginLeft: scale(8),
                },
              ]}>
              <ListView
                listType={LIST_TYPE.SHOP_LIST}
                data={shopListConst}
                onPressItem={this.onPressItem}
              />
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }

  onPressItem = (item: any) => {
    console.log(item);
    navigationService.navigate(SCENES.ROUTE_HOME_MENU_ITEM_DETAIL, {
      item,
    });
  };
}
const mapDispatchToProps = {};
export default connect()(HomeMenu);
