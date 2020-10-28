import { ROUTE_SIGNIN } from './../../../navigation/NavigationRoute.const';
import { Dispatch } from 'redux';
import { LOGOUT_USER } from './../../../types/index';
import navigationService from '../../../navigation/navigationService';

export const logoutUserAction = () => {
    return (dispatch: Dispatch) => {
        dispatch({ type: LOGOUT_USER });
        navigationService.navigate(ROUTE_SIGNIN, {});
    }
}