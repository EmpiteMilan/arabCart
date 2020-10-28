import {UPDATE_TAB_BAR_STACK_SUCCESS} from '../types';

const initialState = {
  tabStack: 'Home',
};

const GlobalReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TAB_BAR_STACK_SUCCESS:
      return {...state, tabStack: action.payload};
    default:
      return initialState;
  }
};

export default GlobalReducer;
