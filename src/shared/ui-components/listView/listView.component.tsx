import React, {Fragment} from 'react';
import {View, SectionList, StyleSheet, ScrollView} from 'react-native';
import {IListView} from './listView.interface';
import {
  MenuListItem,
  MenuHeader,
  TableListItem,
  ShopListItem,
} from './component';

import defaultStyles from '../../../shared/styles/styles';
import commonColors from '../../styles/colors';
import {AuthHeader} from '../authHeader/authHeader.component';
import {LIST_TYPE} from './listView.enum';
import {FlatList} from 'react-native-gesture-handler';

export interface Props {}
let c: 'dvf';
const ListView = (props: IListView) => {
  const {data, onPressItem, onPressItemDetail, listType} = props;
  // return console.log("{data", data.length);
  return (
    <Fragment>
      {listType === LIST_TYPE.TABLE_LIST ? (
        <SectionList
          sections={data}
          renderSectionHeader={({section: {mainTitle, subTitle}}) => (
            <MenuHeader title={mainTitle} subtitle={subTitle} />
          )}
          renderItem={({section: {mainTitle, subTitle}, item, index}) => {
            return <Fragment></Fragment>;
          }}></SectionList>
      ) : (
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <Fragment>
                {listType === LIST_TYPE.SHOP_LIST ? (
                  <ShopListItem
                    item={item}
                    index={index}
                    key={item.id}
                    onPressItem={() => onPressItem(item)}
                    checked={true}
                  />
                ) : listType === LIST_TYPE.SHOP_ITEM_LIST ? (
                  <TableListItem item={item} index={index} key={item.id} />
                ) : null}
              </Fragment>
            );
          }}></FlatList>
      )}
    </Fragment>
  );
};
export {ListView};
