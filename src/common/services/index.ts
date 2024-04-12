import {
  PartnersPayoutRequestFilter,
  PartnersPayoutRequestType,
  PartnersSearchRecordsRequestBody,
  PartnersSearchRecordsRequestQuery,
  PartnersSearchRecordsRequestType,
  PartnersTransactionRequestFilter,
  PartnersTransactionRequestType,
  RequestMethodType,
} from "@common/types";
import { makeAuthenticatedRequest, makeUnAuthenticatedRequest } from "./config";
import { endpoints } from "./endpoints";

export const requests = {
  async getPartnersSummary() {
    const { method, url } = endpoints.get_partner_summary;
    return makeAuthenticatedRequest(method as RequestMethodType, url);
  },

  async listPartnersTransactions(
    type?: PartnersTransactionRequestType,
    filter?: PartnersTransactionRequestFilter
  ) {
    const { method, url } = endpoints.list_partners_transactions;

    return makeAuthenticatedRequest(
      method as RequestMethodType,
      url(type, filter)
    );
  },

  async getTransaction(order_no: string) {
    const { method, url } = endpoints.get_transaction;
    return makeAuthenticatedRequest(method as RequestMethodType, url(order_no));
  },

  async listPartnersPayouts(
    type?: PartnersPayoutRequestType,
    filter?: PartnersPayoutRequestFilter
  ) {
    const { method, url } = endpoints.list_partners_payouts;
    return makeAuthenticatedRequest(
      method as RequestMethodType,
      url(type, filter)
    );
  },

  async getPayout(order_no: string) {
    const { method, url } = endpoints.get_payout;
    return makeAuthenticatedRequest(method as RequestMethodType, url(order_no));
  },

  async listPartnersMerchant() {
    const { method, url } = endpoints.list_partners_merchant;
    return makeAuthenticatedRequest(method as RequestMethodType, url);
  },

  async searchRecords(
    data: PartnersSearchRecordsRequestBody,
    type: PartnersSearchRecordsRequestType,
    query: PartnersSearchRecordsRequestQuery
  ) {
    const { method, url } = endpoints.search_records;

    return makeAuthenticatedRequest(
      method as RequestMethodType,
      url(type, query),
      data
    );
  },

  async getSupportedCountries() {
    const { method, url } = endpoints.get_supported_countries;

    return makeUnAuthenticatedRequest(method as RequestMethodType, url);
  },
};
