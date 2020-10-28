import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, View, Text, Dimensions} from 'react-native';

import defaultStyles from '../../../shared/styles/styles';
import styles from './language.styles';

import * as SCENES from '../../../navigation/NavigationRoute.const';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthLogo} from '../components';
import {SelectSwitch} from './component/selectSwitch/selectSwitch.component';
import {FooterLogo} from '../components/footerLogo/footerLogo';
import navigationService from '../../../navigation/navigationService';

const {
  containerGray,
  authWrapper,
  bgColorGrayF7F7F7,
  bgColorWhite,
  flex1,
  bgColorMain,
  contentCenter,
  fontSize25,
  fontFamilyMedium,
  colorBlack,
  fontWeightBold,
  borderContainer,
} = defaultStyles;

const {Container, textStyle, switchStyle, footer} = styles;

const {height} = Dimensions.get('screen');

class SelectLanguage extends Component<Props, State> {
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
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <Fragment>
        <SafeAreaView style={[containerGray]}></SafeAreaView>
        {/* <SafeAreaView style={bgColorWhite}></SafeAreaView>
        <SafeAreaView style={bgColorWhite}></SafeAreaView>  */}
        <View style={[bgColorWhite, flex1, borderContainer]}>
          <AuthLogo />
          <View style={[contentCenter]}>
            <Text style={[textStyle, fontWeightBold, fontSize25, colorBlack]}>
              Select Language
            </Text>
          </View>
          <View style={[switchStyle]}>
            <SelectSwitch onPress={this.onPressValue} />
          </View>
          <View style={[footer]}>
            <FooterLogo />
          </View>
        </View>
      </Fragment>
    );
  }

  onPressValue = (value: number) => {
    console.log(value, 'value number lng');
    navigationService.navigate(SCENES.ROUTE_SIGNIN, {value});
  };
}

const mapDispatchToProps = {};

const mapStateToProps = (state: any) => ({
  createOrderPending: state.signInReducer.createOrderPending,
  fireAlert: state.signInReducer.fireAlert,
  alertMessage: state.signInReducer.alertMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectLanguage);
