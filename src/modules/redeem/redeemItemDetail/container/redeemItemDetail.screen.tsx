import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {View, SafeAreaView} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import {ModelHeader} from '../../../../shared/ui-components/modelHeader/modelHeader.component';
import styles from './redeemItemDetail.styles';
import {MenuListItem} from '../../../../shared/ui-components/listView/component/menuList/menuList.component';
import {IRedeemItemDetail} from '../redeemItemDetail.interface';
import {ScrollView} from 'react-native-gesture-handler';
import {optionsCheckConst} from '../../../../shared/ui-components/checkItem/optionsConst';
import {Button, Title, CheckItem} from '../../../../shared/ui-components';
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
class RedeemItemDetail extends Component<IRedeemItemDetail, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  state = {
    isSelected: false,
    checked: false,
    optionArray: optionsCheckConst,
  };

  onClick() {
    this.setState({
      checked: false,
    });
  }

  render() {
    const {item, mainTitle, index} = this.props.navigation.state.params;
    const {id} = item;
    const {optionArray} = this.state;
    return (
      <Fragment>
        <SafeAreaView style={[containerGray, flex1]}></SafeAreaView>
        <View style={[bgColorWhite]}>
          <View>
            <ModelHeader title={mainTitle + '  Menu'}></ModelHeader>
          </View>
          <ScrollView>
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
                {optionArray.map((options, index) => {
                  return (
                    <CheckItem
                      option={options}
                      index={index}
                      checked={this.state.checked}
                      onPress={(index) => this.onClick()}
                    />
                  );
                })}
              </View>
            </View>
          </ScrollView>
          <View
            style={[
              {backgroundColor: commonColors.white, justifyContent: 'flex-end'},
            ]}>
            <Button
              // buttonColor="grayF8F8F8"
              buttonColor="grayF8F8F8"
              // textColor="GRAY707070"
              textColor="gray707070"
              textSize="large"
              size="large"
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
export default connect()(RedeemItemDetail);
