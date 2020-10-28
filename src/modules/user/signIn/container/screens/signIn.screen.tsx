import React, {Component, Fragment} from 'react';
import {connect} from 'react-redux';
import {
  View,
  SafeAreaView,
  Text,
  Alert,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import {Button, AuthHeader} from '../../../../../shared/ui-components';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {AuthLogo, Input, ForgoPasswordButton} from '../../../components';
import {createOrder} from '../../signIn.action';
import navigationService from '../../../../../navigation/navigationService';
import SocialLogin from '../../../components/socialLogin/socialLogin.component';
import * as SCENES from '../../../../../navigation/NavigationRoute.const';

import defaultStyles from '../../../../../shared/styles/styles';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import {FooterLogo} from '../../../components/footerLogo/footerLogo';
import {INPUT_KEYBOARD_TYPE} from '../../../../../shared/enums/enums';

const {
  containerGray,
  authWrapper,
  bgColorGrayF7F7F7,
  bgColorWhite,
  flex1,
  borderContainer,
  contentCenter,
  fontSize18,
  marginTop32,
} = defaultStyles;

const {height} = Dimensions.get('screen');

export interface Props {
  alertMessage: string;
}
interface State {
  screenHeight: number;
  email: string;
  password: string;
}

class SignIn extends Component<Props, State> {
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

  componentWillMount() {}

  onPressSignUp() {
    navigationService.navigate(SCENES.ROUTE_SIGNUP, {});
  }
  onPressSignIn() {
    navigationService.navigate(SCENES.ROUTE_CATEGORY_SCREEN, {});
  }

  createAlert = () => {
    Alert.alert(
      'Order Creating',
      this.props.alertMessage,
      [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      {cancelable: false},
    );
  };

  onContentSizeChange = (contentHeight: number) => {
    this.setState({screenHeight: contentHeight});
  };

  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <Fragment>
        <SafeAreaView style={[bgColorWhite]}></SafeAreaView>

        <View style={[bgColorWhite, flex1, borderContainer]}>
          <AuthLogo />
          <View style={[authWrapper, bgColorWhite]}>
            <Input
              iconType="UserName"
              placeholder="User Name"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              keyboardType={INPUT_KEYBOARD_TYPE.EMAIL}
            />
            <Input
              iconType="Password"
              placeholder="Password"
              onChangeText={(email) => this.setState({email})}
              value={this.state.email}
              keyboardType={INPUT_KEYBOARD_TYPE.EMAIL}
            />
            <Button
              buttonColor="mainColor"
              textColor="white"
              textSize="large"
              fontSize="18"
              size="large"
              title="SIGN IN"
              border
              onPress={() => this.onPressSignIn()}
            />

            <Button
              buttonColor="white"
              textColor="red480B14"
              textSize="small"
              fontSize="16"
              size="large"
              border
              borderColor="mainColor"
              title="CONTINUE AS A GUEST"
              onPress={() => this.onPressSignUp()}
            />
            <View style={[contentCenter, marginTop32]}>
              <Text style={[fontSize18]}>Don't have an account</Text>
              <ForgoPasswordButton />
            </View>
          </View>
          <FooterLogo />
        </View>
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  createOrder,
};

const mapStateToProps = (state: any) => ({
  createOrderPending: state.signInReducer.createOrderPending,
  fireAlert: state.signInReducer.fireAlert,
  alertMessage: state.signInReducer.alertMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
