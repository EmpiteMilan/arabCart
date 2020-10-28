export let authToken = '';
export let tenantId = '';
export let userId = '';
export let pushToken = '';

export let selectedTabId = '';

export const setAuthToken = (token: string) => {
  authToken = token;
};

export const setTenantId = (id: string) => {
  tenantId = id;
};

export const setUserId = (id: string) => {
  userId = id;
};

export const setPushToken = (id: string) => {
  pushToken = id;
};

export const setSelectedTab = (id: string) => {
  selectedTabId = id;
};
