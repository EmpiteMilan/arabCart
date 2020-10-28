import {deviceType} from '../ui-components/customized/utils/scale';
import {DEVICE_TYPE} from '../ui-components/customized/utils/deviceType';
import {LISTITEM_TYPE} from '../ui-components/listView/components/orderListItem/orderListItem.enum';

export const isMobileOrTabletDetail = (type: number) => {
  return (
    deviceType[0] === DEVICE_TYPE.HANDSET ||
    (deviceType[0] === DEVICE_TYPE.TABLET &&
      type === LISTITEM_TYPE.DETAIL_LIST_ITEM)
  );
};

export const isMobile = () => {
  return deviceType[0] === DEVICE_TYPE.HANDSET;
};

export const isTablet = () => {
  return deviceType[0] === DEVICE_TYPE.TABLET;
};
