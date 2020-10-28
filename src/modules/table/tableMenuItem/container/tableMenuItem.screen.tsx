import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './tableMenuItem.styles';
import {MenuListItem} from '../../../../shared/ui-components/listView/component/menuList/menuList.component';
import {IItemDetail} from '../tableMenuItem.interface';
import {ScrollView} from 'react-native-gesture-handler';
import {optionsCheckConst} from '../../../../shared/ui-components/checkItem/optionsConst';
import {addonsConst} from '../../addOns/addons.const';
import {Button, CheckItem, Title} from '../../../../shared/ui-components';
import commonColors from '../../../../shared/styles/colors';
const {bgColorWhite, flex1, containerGray} = defaultStyles;

export interface Props {
  createOrder: () => void;
  createOrderPending: boolean;
  alertMessage: string;
  fireAlert: boolean;
  restaurantName: string;
  categories: Array<any>;
  onPressCategory: () => void;
}
const {titleBox, optionBox, line, listItemContainer} = styles;

interface State {}
class ItemDetail extends Component<IItemDetail, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {
    isSelected: false,
    checked: false,
    list: optionsCheckConst,
    addOnsArray: addonsConst,
    button: false,
  };

  onClick = (id) => {
    console.log('item ID : ', id);
    const updatedList = this.state.list.map((options) =>
      options.id === id
        ? {...options, checked: true}
        : {...options, checked: false},
    );
    this.setState({list: updatedList, button: true});
  };

  render() {
    const {item, mainTitle, index} = this.props.navigation.state.params;
    const {id} = item;
    const {list, addOnsArray} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[containerGray]}></SafeAreaView>
        <View style={flex1}>
          <View>
            <ModelHeader title={mainTitle + '  Menu'}></ModelHeader>
          </View>
          <ScrollView>
            <View style={[flex1]}>
              <View style={[listItemContainer]}>
                <MenuListItem
                  mainTitle={mainTitle}
                  item={item}
                  index={index}
                  key={id}
                  onPressItem={null}
                  checked={false}
                />
              </View>
              <View style={[bgColorWhite]}>
                <View style={[titleBox]}>
                  <Title title="Select an option" />
                </View>
                <View style={[line]}></View>
                <View style={[optionBox]}>
                  {list.map((options, index) => {
                    return (
                      <CheckItem
                        option={options}
                        index={index}
                        checked={this.state.list[options.id].checked}
                        onPress={() => this.onClick(options.id)}
                      />
                    );
                  })}
                </View>
                <View style={[titleBox]}>
                  <Title title="Add-ons" />
                </View>
                <View style={[line]}></View>
                <View style={[optionBox]}>
                  {addOnsArray.map((options, index) => {
                    return (
                      <CheckItem
                        option={options}
                        index={index}
                        checked={this.state.checked}
                        onPress={null}
                      />
                    );
                  })}
                </View>
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              {backgroundColor: commonColors.white, justifyContent: 'flex-end'},
            ]}>
            <Button
              buttonColor={this.state.button === true ? 'green' : 'grayF8F8F8'}
              textColor={this.state.button === true ? 'white' : 'gray707070'}
              textSize="large"
              size="large"
              fontSize="20"
              title="Add To Cart"
              countEnable
              count="$ 33"
              onPress={null}
            />
          </View>
        </View>
      </Fragment>
    );
  }
}
export default connect()(ItemDetail);
