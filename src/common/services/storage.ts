import { STORAGE_KEYS } from "./const";

export const getItem = (key: string) => {
  return localStorage.getItem(key) || null;
};
export const removeItem = (key: string) => {
  return localStorage.removeItem(key);
};

export const setItem = (key: string, value: any) => {
  return localStorage.setItem(key, value);
};

export const clearData = () => localStorage.clear();

export const fetchPartnerToken = () => {
  return getItem(STORAGE_KEYS.ACCESS_TOKEN);
};

export const fetchPartnerCurrency = () => {
  return getItem(STORAGE_KEYS.X_CURRENCY);
};

export const fetchPartnerID = () => {
  return getItem(STORAGE_KEYS.X_PARTNER_ID);
};

export const setPartnerToken = (token: string) => {
  setItem(STORAGE_KEYS.ACCESS_TOKEN, token);
};

export const setPartnerCurrency = (token: string) => {
  setItem(STORAGE_KEYS.X_CURRENCY, token);
};

export const setPartnerID = (token: string) => {
  setItem(STORAGE_KEYS.X_PARTNER_ID, token);
};
