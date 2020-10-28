import {Dispatch} from 'redux';
import {
  CREATE_ORDER_PENDING,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
} from '../../../types';
import {createOrderService} from './signIn.service';

export const createOrder = () => {
  return (dispatch: Dispatch) => {
    dispatch({type: CREATE_ORDER_PENDING});

    return createOrderService()
      .then((response: any) => {
        if (!response.hasError) {
          dispatch({
            type: CREATE_ORDER_SUCCESS,
          });
        }
      })
      .catch((error: any) => {
        dispatch({type: CREATE_ORDER_FAIL});
        return {errorMessage: 'Network Error'};
      });
  };
};
