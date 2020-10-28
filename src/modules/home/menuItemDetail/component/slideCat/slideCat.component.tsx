import React from 'react';
import {View, ScrollView} from 'react-native';
import {SlideCatDetail} from '../slideCatDetail/slideCatDetail.component';
import {ISlideCat} from './slideCat.interface';

import styles from './slideCat.style';

const {container} = styles;

export interface Props {}
const SlideCat = (props: ISlideCat) => {
  const {
    categories,
    onPressPaymentMethod,
    onSelectedTabIndex,
    isModalVisible,
  } = props;
  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={[container]}>
        {categories.map((item, index) => {
          return <SlideCatDetail category={item} index={index} />;
        })}
      </ScrollView>
    </View>
  );
};

export {SlideCat};
