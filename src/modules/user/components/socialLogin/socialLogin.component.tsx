import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';
import Styles from './socialLogin.styles';
import {ISocialLogin} from './socialLogin.interface';
import SVGcFACEBOOK from '../../../../assets/order/remove.svg';
import {scale} from '../../../../shared/ui-components/customized/utils/scale';
import commonColors from '../../../../shared/styles/colors';

const {
  flex1,
  alignSelfCenter,
  fontSize16,
  colorGrayA1A3B5,
  flexDirectionRow,
  bgColorWhite,
  alignCenter,
} = defaultStyles;
const {itemWrapper, socialItem, mainContainer} = Styles;

interface State {}
class SocialLogin extends Component<ISocialLogin, State> {
  static navigationOptions = () => {
    return {headerShown: false};
  };
  state = {
    isSelected: false,
    checked: false,
  };

  onClick() {
    this.setState({
      checked: false,
    });
  }
  render() {
    return (
      <View style={[]}>
        <View style={[alignSelfCenter]}>
          <Text style={[fontSize16, colorGrayA1A3B5]}>
            Or you can join with
          </Text>
        </View>
        <View style={[flexDirectionRow, alignSelfCenter, mainContainer]}>
          <TouchableOpacity style={[bgColorWhite, socialItem]} onPress={null}>
            <SVGcFACEBOOK width={scale(22)} height={scale(18)} />
          </TouchableOpacity>
          <TouchableOpacity style={[bgColorWhite, socialItem]} onPress={null}>
            <SVGcFACEBOOK width={scale(22)} height={scale(18)} />
          </TouchableOpacity>
          <TouchableOpacity style={[bgColorWhite, socialItem]} onPress={null}>
            <SVGcFACEBOOK width={scale(22)} height={scale(18)} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect()(SocialLogin);
