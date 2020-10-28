import React, {PureComponent} from 'react';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import DefaultStyles from '../../../../styles/styles';
import {ITabBarItem} from './tabBarItem.interface';
import commonColors from '../../../../styles/colors';
import {connect} from 'react-redux';
import {updateTabBarStackItem} from '../../../../../actions/global.action';
import Styles from './tabBarItem.styles';
import {tabBarIcons} from '../../../../helperFunctions/images';

const {fontSize10, bgColorWhite} = DefaultStyles;
const {itemWrapper, textStyle, item,} = Styles;

class TabBarItem extends PureComponent<ITabBarItem, State> {
  handlePress = () => {
    const {updateTabBarStackItem, routeName, navigation} = this.props;
    updateTabBarStackItem(routeName);
    navigation.navigate(routeName);
  };
  render() {
    const {routeName, isActive} = this.props;
    const icon = tabBarIcons[isActive ? 'active' : 'inactive'][routeName];
    return (      
        <TouchableOpacity
          style={[bgColorWhite, itemWrapper]}
          onPress={this.handlePress}>
          <Image source={icon} />
        </TouchableOpacity>
    
    );
  }
}

const mapDispatchToProps = {
  updateTabBarStackItem,
};
export default connect(null, mapDispatchToProps)(TabBarItem);
