import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

import defaultStyles from '../../../../../shared/styles/styles';
import styles from './redeemCard.styles';
import {scale} from '../../../../../shared/ui-components/customized/utils/scale';
import {IRedeemCard} from './redeemCard.interface';
import SVGActive from '../../../../../assets/redeem/active.svg';
import SVGDefault from '../../../../../assets/redeem/default.svg';
import SVGFreeActive from '../../../../../assets/redeem/free_active.svg';

const {contentCenter} = defaultStyles;
const {inactiveCard, activeCard, min} = styles;
export interface Props {}

const RedeemCard = (props: IRedeemCard) => {
  let buttonStyle: Array<any> = [contentCenter];
  const {redeemCardArray, index} = props;
  const {id, name, status} = props.redeemCardArray;
  let carDesign: Object = status === 'active' ? activeCard : inactiveCard;
  buttonStyle.push(carDesign);
  return (
    <View>
      <TouchableOpacity style={[buttonStyle, min]}>
        <View>
          {status === 'active' ? (
            <SVGActive width={scale(43)} height={scale(52)} />
          ) : status === 'deactive' ? (
            <SVGDefault width={scale(43)} height={scale(52)} />
          ) : (
            <SVGFreeActive width={scale(43)} height={scale(52)} />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export {RedeemCard};
