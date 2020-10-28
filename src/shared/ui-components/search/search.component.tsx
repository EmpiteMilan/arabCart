import React from 'react';
import {View, TextInput} from 'react-native';
import {ISearch} from './search.interface';
import SVGSearch from '../../../assets/common/search_icon.svg';
import {scale} from '../../../shared/ui-components/customized/utils/scale';
import defaultStyles from '../../../shared/styles/styles';
import styles from './search.styles';

const {flexDirectionRow, bgColorGrayF7F7F7, flex1, alignCenter,borderRadius10} = defaultStyles;
const {iconStyles, container} = styles;
export interface Props {}

const Search = (props: ISearch) => {
  const {placeholder, value, onChangeText} = props;
  return (
    <View
      style={[flexDirectionRow, bgColorGrayF7F7F7,  alignCenter, container,borderRadius10]}>
      <SVGSearch width={scale(20)} height={scale(20)} style={iconStyles} />
      <TextInput
        placeholder="Search"
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export {Search};
