import {userSignUpService} from './signUp.reducer';
import {

} from './../../../types/index';
import {Dispatch} from 'redux';
import * as SCENES from '../../../navigation/NavigationRoute.const';
import navigationService from '../../../navigation/navigationService';

export const userSignUpAction = (
  name: string,
  email: string,
  password: string,
  deviceToken: string,
) => {
  return (dispatch: Dispatch) => {


    return userSignUpService(name, email, password, deviceToken)
    
  };
};
