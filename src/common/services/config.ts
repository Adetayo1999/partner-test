import { RequestMethodType } from "@common/types";
import axios from "axios";
import { fetchPartnerID, fetchPartnerToken } from "./storage";

const headers = {
  "Content-Type": "application/json",
};

const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers,
});

export const makeUnAuthenticatedRequest = async (
  method: RequestMethodType,
  url: string,
  data = {}
) => {
  const response = await instance.request({
    method,
    url,
    data,
  });

  return response;
};

export const makeAuthenticatedRequest = async (
  method: RequestMethodType,
  url: string,
  data = {}
) => {
  const requestHeaders = {
    ...headers,
    "x-partner-id": fetchPartnerID(),
    Authorization: `Bearer ${fetchPartnerToken()}`,
    "x-currency": fetchPartnerID(),
  };

  const response = await instance.request({
    method,
    url,
    data,
    headers: requestHeaders,
  });

  return response;
};
