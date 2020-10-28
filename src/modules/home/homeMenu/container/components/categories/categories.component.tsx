import React from 'react';
import {View, ScrollView} from 'react-native';
import {ICategories} from './categories.interface';
import {CategoryItem} from './components';
import {scale} from '../../../../../../shared/ui-components/customized/utils/scale';
export interface Props {}
const Categories = (props: ICategories) => {
  const {categories, onPress} = props;

  return (
    <View>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentOffset={{x: scale(8), y: 0}}>
        {categories.map((category, index) => {
          return (
            <CategoryItem
              category={category}
              index={index}
              onPress={(index) => onPress(index)}
            />
          );
        })}
      </ScrollView>
    </View>
  );
};

export {Categories};
