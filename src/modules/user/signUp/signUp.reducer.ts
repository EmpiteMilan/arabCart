import { METHODS } from './../../../shared/api/restClient';
import { client } from '../../../shared/api/restClient';

import { SIGNUP } from './../../../shared/api/urls';

export const userSignUpService = async (name: string, email: string, password: string, deviceToken: string) => {
    const body = {
        name,
        email,
        password,
        deviceToken
    };
    const headerConfig = {
        headers: {
            'Content-Type': 'application/json',
        },
    };
    return await client.API(METHODS.POST, SIGNUP, body, headerConfig);
};