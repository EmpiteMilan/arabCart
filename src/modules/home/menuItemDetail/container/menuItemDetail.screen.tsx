import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {categoriesConst} from '../../homeMenu/container/components/categories/categories.const';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './menuItemDetail.styles';
import {MenuListItem} from '../../../../shared/ui-components/listView/component/menuList/menuList.component';
import {ICartMenu} from '../menuItemDetail.interface';
import {ScrollView} from 'react-native-gesture-handler';
import {optionsCheckConst} from '../../../../shared/ui-components/checkItem/optionsConst';
import {Button, CheckItem, Title} from '../../../../shared/ui-components';
import commonColors from '../../../../shared/styles/colors';
import navigationService from '../../../../navigation/navigationService';
import * as SCENES from '../../../../navigation/NavigationRoute.const';
import {ShopListItem} from '../../../../shared/ui-components/listView/component';
import {SlideCat} from '../component/slideCat/slideCat.component';

import {SlideCatConst} from '../component/slideCat/slideCat.const';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
import {ListView} from '../../../../shared/ui-components/listView/listView.component';
import {LIST_TYPE} from '../../../../shared/ui-components/listView/listView.enum';
import {menuItemConst} from '../../../../shared/ui-components/listView/component/tableList/tableList.const';

const {bgColorWhite, bgColorRed450E14, containerGray, flex1} = defaultStyles;

export interface Props {
  createOrder: () => void;
  createOrderPending: boolean;
  alertMessage: string;
  fireAlert: boolean;
  restaurantName: string;
  categories: Array<any>;
  onPressCategory: () => void;
}
const {titleBox, optionBox, line, catStyle, listItemContainer} = styles;
interface State {}
class CartMenu extends Component<ICartMenu, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {
    categories: categoriesConst,
    isSelected: false,
    checked: false,
    list: optionsCheckConst,
    button: false,
    slideCat: SlideCatConst,
  };

  onPressCart() {
    navigationService.navigate(SCENES.ROUTE_CART, {});
  }
  render() {
    const {item, mainTitle, index} = this.props.navigation.state.params;
    const {id, title} = item;
    const {list, slideCat} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[bgColorWhite]}></SafeAreaView>
        <View>
          <ModelHeader title={title}></ModelHeader>
        </View>

        <View style={[flex1]}>
          <View style={[listItemContainer]}>
            <ShopListItem
              item={item}
              index={index}
              key={item.id}
              onPressItem={() => null}
              checked={true}
            />
          </View>
          <View style={[catStyle]}>
            <SlideCat categories={slideCat} onPressPaymentMethod={() => null} />
          </View>
          <ScrollView>
            <View
              style={[
                {
                  marginTop: scale(8),
                  marginRight: scale(10),
                  marginLeft: scale(8),
                },
              ]}>
              <ListView
                listType={LIST_TYPE.SHOP_ITEM_LIST}
                data={menuItemConst}
              />
            </View>
          </ScrollView>
        </View>
      </Fragment>
    );
  }
}
export default connect()(CartMenu);
