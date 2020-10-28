import {persistReducer, PURGE, REHYDRATE} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {
  CREATE_ORDER_PENDING,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from '../../../types';

const INITIAL_STATE = {
  createOrderPending: false,
  fireAlert: false,
  alertMessage: '',
};

const persistConfig = {
  key: 'signInStore',
  storage: AsyncStorage,
  blacklist: ['createOrderPending'],
};

const signInReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case REHYDRATE:
      return {
        ...state,
      };

    case CREATE_ORDER_PENDING:
      return {
        ...state,
        createOrderPending: true,
        fireAlert: false,
      };

    case CREATE_ORDER_SUCCESS:
      return {
        ...state,
        createOrderPending: false,
        fireAlert: true,
        alertMessage: 'Order Success',
      };

    case CREATE_ORDER_FAIL:
      return {
        ...state,
        createOrderPending: false,
        fireAlert: true,
        alertMessage: 'Order Fail',
      };
    default:
      return state;
  }
};

export default persistReducer(persistConfig, signInReducer);
