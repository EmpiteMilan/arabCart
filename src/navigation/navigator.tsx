import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {
  createTabNavigator,
  createBottomTabNavigator,
} from 'react-navigation-tabs';
import * as SCENES from './NavigationRoute.const';

import SignIn from '../modules/user/signIn/container/screens/signIn.screen';
import SignUp from '../modules/user/signUp/container/screens/signUp.screen';
import SelectLanguage from '../modules/user/language/language.screen';

import Home from '../modules/home/homeMenu/container/homeMenu.screen';
import HomeMenuItemDetail from '../modules/home/menuItemDetail/container/menuItemDetail.screen';
import TabBar from '../shared/ui-components/tabBar/tabBar.component';
import TableMenu from '../modules/table/tableMenu/container/tableMenu.screen';
import TableMenuItem from '../modules/table/tableMenuItem/container/tableMenuItem.screen';
import Redeem from '../modules/redeem/redeem/container/redeem.screen';
import RedeemMenuList from '../modules/redeem/redeemMenuList/container/redeemMenuList.screen';
import RedeemItemDetail from '../modules/redeem/redeemItemDetail/container/redeemItemDetail.screen';
import Cart from '../modules/cart/container/cart.screen';
import CategoryScreen from '../modules/home/category/category.screen';
const AuthStack = createStackNavigator(
  {
    SelectLanguage: SelectLanguage,
    SignIn: SignIn,
    SignUp: SignUp,
    CategoryScreen: CategoryScreen,
  },
  {
    initialRouteName: SCENES.ROUTE_SELECTLANGUAGE,
  },
);

const HomeStack = createStackNavigator(
  {
    Home: Home,
    HomeMenuItemDetail: HomeMenuItemDetail,
    Cart: Cart,
  },
  {
    initialRouteName: SCENES.ROUTE_HOME,
  },
);

const TableStack = createStackNavigator(
  {
    TableMenu: TableMenu,
    TableMenuItem: TableMenuItem,
  },
  {
    initialRouteName: SCENES.ROUTE_TABLEMENU,
  },
);
const RedeemStack = createStackNavigator({
  Redeem: Redeem,
  RedeemMenuList: RedeemMenuList,
  RedeemItemDetail: RedeemItemDetail,
});

const MainStack = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: HomeStack,
  },
  {
    initialRouteName: SCENES.ROUTE_HOME,
    tabBarComponent: (props) => <TabBar {...props} />,
  },
);
const SwitchStack = createSwitchNavigator({
  Auth: AuthStack,
  MainStack: MainStack,
});

const Navigator = createAppContainer(SwitchStack);
export default Navigator;
