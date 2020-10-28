import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import defaultStyles from '../../../../shared/styles/styles';

import navigationService from '../../../../navigation/navigationService';
import { scale } from '../../../../shared/ui-components/customized/utils/scale';

const {
  flexDirectionRow,
  alignSelfCenter,
  colorGaryA1A3B5,
  colorPrimary,
  fontSize14,
} = defaultStyles;

const AlreadyUserButton = () => {
  return (
    <View style={[flexDirectionRow, alignSelfCenter]}>
      <Text style={[fontSize14, colorGaryA1A3B5,{marginHorizontal:scale(5)}]}>Already user ?</Text>
      <TouchableOpacity onPress={() => navigationService.goBack()}>
        <Text style={[fontSize14, colorPrimary,{fontWeight:'bold'}]}>Sign in</Text>
      </TouchableOpacity>
    </View>
  );
};

export {AlreadyUserButton};
