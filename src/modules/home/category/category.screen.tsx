import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, Dimensions, Image} from 'react-native';

import defaultStyles from '../../../shared/styles/styles';
import styles from './category.styles';
import {CategoryItem} from '../homeMenu/container/components/categories/components';
import {
  CategoryItems,
  MainCategoryItems,
} from './component/categoryItem/categoryItem.component';

import * as SCENES from '../../../navigation/NavigationRoute.const';

import SVGCENTER from '../../assets/category/imh.svg';
import {scale} from '../../../shared/ui-components/customized/utils/scale';
import navigationService from '../../../navigation/navigationService';

const {
  containerGray,
  bgColorWhite,
  bgColorRed450E14,
  flex1,
  borderContainer,
  flexDirectionRow,
  contentCenter,
  marginTop15,
} = defaultStyles;

const {rowContainer, rowSecondContainer, imageSize} = styles;

const {height} = Dimensions.get('screen');

class CategoryScreen extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      screenHeight: 0,
      email: '',
      password: '',
    };
  }

  onContentSizeChange = (contentHeight: number) => {
    this.setState({screenHeight: contentHeight});
  };

  render() {
    return (
      <Fragment>
        <SafeAreaView style={[containerGray]}></SafeAreaView>
        <View style={[bgColorWhite, flex1, borderContainer]}>
          <View style={[flexDirectionRow, rowContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Perfumes'}
              imageName={'LADYPERFUME'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Watches'}
              imageName={'LADYWATCH'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Handbags'}
              imageName={'LAdYHAND'}
            />
          </View>
          <View style={[flexDirectionRow, rowSecondContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Footwear'}
              imageName={'FOOTWEAR'}
            />
            <MainCategoryItems
              onPress={() => null}
              title={''}
              imageName={'LADY'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Dresses'}
              imageName={'ess'}
            />
          </View>

          <View style={[flexDirectionRow, rowSecondContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Wedding'}
              imageName={'WEDDING'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Jeans'}
              imageName={'JEANS'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Jewelry'}
              imageName={'JEW'}
            />
          </View>

          {/* end first */}
          <View style={[contentCenter, marginTop15]}>
            <Image
              source={require('../../../assets/category/png.png')}
              style={imageSize}
            />
          </View>

          {/* start vsec */}

          <View style={[flexDirectionRow, rowContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Perfumes'}
              imageName={'BP'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Watches'}
              imageName={'BW'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Shirts'}
              imageName={'BS'}
            />
          </View>
          <View style={[flexDirectionRow, rowSecondContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Jeans'}
              imageName={'BJ'}
            />
            <MainCategoryItems
              onPress={() => null}
              title={''}
              imageName={'BM'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Tie'}
              imageName={'BT'}
            />
          </View>

          <View style={[flexDirectionRow, rowSecondContainer]}>
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Shoes'}
              imageName={'BSH'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Socks'}
              imageName={'BSO'}
            />
            <MainCategoryItems
              onPress={this.onPressCategory}
              title={'Sunglasses'}
              imageName={'BSU'}
            />
          </View>
        </View>
      </Fragment>
    );
  }

  onPressCategory = (title: string) => {
    console.log(title, 'value number lng');
    navigationService.navigate(SCENES.ROUTE_HOME, {title});
  };
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  createOrderPending: state.signInReducer.createOrderPending,
  fireAlert: state.signInReducer.fireAlert,
  alertMessage: state.signInReducer.alertMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryScreen);
