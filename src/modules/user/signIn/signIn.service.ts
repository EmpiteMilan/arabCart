import {
  IdentityClient,
  IConfig,
  UserLoginRequest,
} from '../../../shared/api/client';

export const userLoginService = async (userName: string, pwdHash: string,isGuest:boolean,isArabic:boolean) => {
  let identityClient = new IdentityClient(new IConfig());
  let body = new UserLoginRequest({userName, pwdHash,isGuest,isArabic, role: 'Administrators'});

  return await identityClient.login(body).then((response) => {
    return response;
  });

  //return await client.API(METHODS.POST, USER_LOGIN, body, headerConfig);

  // http://144.91.115.179:57003/services/Login?userName=abc&pwdHash =123&isGuest=false&isArabic=false   
};

