import DeviceInfo from 'react-native-device-info';
import {Platform} from 'react-native';

/**
 * return the device has notch True/false
 *
 * @export
 * @return {*}
 */
export function hasNotch() {
  return DeviceInfo.hasNotch();
}

/**
 * return the notch height(only return notch height), in ios notch + status bar height should be 44, this function return only notch height
 *
 * @export
 * @return {*}
 */
export function getNotchHeight() {
  return DeviceInfo.hasNotch() ? 24 : 0;
}

export function getPlatform() {
  return Platform;
}
