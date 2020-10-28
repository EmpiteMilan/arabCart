import {Dispatch} from 'redux';
import {UPDATE_TAB_BAR_STACK_SUCCESS} from '../types';

export const updateTabBarStackItem = (input) => {
  return (dispatch: Dispatch) => {
    dispatch({
      type: UPDATE_TAB_BAR_STACK_SUCCESS,
      payload: input,
    });
  };
};
