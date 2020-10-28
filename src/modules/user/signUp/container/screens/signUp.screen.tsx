import React, {Component, Fragment} from 'react';
import {View, Dimensions, ActivityIndicator} from 'react-native';
import SafeAreaView from 'react-native-safe-area-view';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import defaultStyles from '../../../../../shared/styles/styles';
import {AuthLogo, Input, AlreadyUserButton} from '../../../components';
import {AuthHeader, Button} from '../../../../../shared/ui-components';
import {connect} from 'react-redux';
import {userSignUpAction} from '../../signUp.action';

const {
  containerGray,
  containerWhite,
  authWrapper,
  bgColorWhite,
  bgColorGrayF7F7F7,
} = defaultStyles;

const {height} = Dimensions.get('screen');

export interface Props {}
interface State {
  screenHeight: number;
  name: string;
  email: string;
  password: string;
}

class SignUp extends Component<Props, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };

  constructor(props: Props) {
    super(props);
    this.state = {
      screenHeight: 0,
      name: '',
      email: '',
      password: '',
    };
  }
  render() {
    const scrollEnabled = this.state.screenHeight > height;
    return (
      <Fragment>
        <SafeAreaView style={bgColorGrayF7F7F7}></SafeAreaView>
        <SafeAreaView style={containerWhite}>
          <KeyboardAwareScrollView
            scrollEnabled={scrollEnabled}
            contentContainerStyle={containerGray}>
            <AuthLogo />
            <View style={authWrapper}>
              <AuthHeader title="Create an account" />
              <Input
                iconType="name"
                label="NAME"
                placeholder="Enter name"
                onChangeText={(name) => this.setState({name})}
                value={this.state.name}
              />
              <Input
                iconType="email"
                label="EMAIL"
                placeholder="Enter email"
                onChangeText={(email) => this.setState({email})}
                value={this.state.email}
              />
              <Input
                iconType="password"
                label="PASSWORD"
                placeholder="Enter password"
                onChangeText={(password) => this.setState({password})}
                value={this.state.password}
                secureTextEntry={true}
              />
              <Button
                buttonColor="green"
                textColor="white"
                textSize="large"
                fontSize="16"
                size="large"
                title="Create an account"
                onPress={null}
              />
              <AlreadyUserButton />
            </View>
          </KeyboardAwareScrollView>
        </SafeAreaView>
        <SafeAreaView style={bgColorWhite}></SafeAreaView>
      </Fragment>
    );
  }
}

export default connect()(SignUp);
