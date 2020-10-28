import React, {PureComponent} from 'react';
import {View, Dimensions} from 'react-native';
import TabBarItem from './component/tabBarItem/tabBarItem.component';
import {ITabBar} from './tabBar.interface';
import {State} from 'react-native-gesture-handler';
import styles from './tabBar.styles';
import defaultStyles from '../../styles/styles';

const {bgColorWhite} = defaultStyles;
const {tabBarWrapper} = styles;
class TabBar extends PureComponent<ITabBar, State> {
  render() {
    const {navigation} = this.props;
    const {routes, index} = navigation.state;
    return (
      <View >
        <View style={[bgColorWhite,tabBarWrapper]}>
          {routes.map((route, i) => (
            <TabBarItem
              key={route.routeName}
              navigation={navigation}
              {...route}
              isActive={index == i}
            />
          ))}
        </View>
      </View>
    );
  }
}

export default TabBar;
