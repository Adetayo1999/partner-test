import {
  PartnersTransactionRequestFilter,
  PartnersTransactionRequestType,
  PartnersPayoutRequestFilter,
  PartnersPayoutRequestType,
  PartnersSearchRecordsRequestType,
  PartnersSearchRecordsRequestQuery,
} from "@common/types";

export const endpoints = {
  get_partner_summary: {
    method: "GET",
    url: "/PartnerAdmin/Summary",
  },
  list_partners_transactions: {
    method: "GET",
    url: (
      type?: PartnersTransactionRequestType,
      filter?: PartnersTransactionRequestFilter
    ) => `/PartnerAdmin/Transactions?type=${type || ""}&filter=${filter || ""}`,
  },

  get_transaction: {
    method: "GET",
    url: (order_no: string) => `/PartnerAdmin/GetTransaction
?order_no=${order_no}`,
  },

  list_partners_payouts: {
    method: "GET",
    url: (
      type?: PartnersPayoutRequestType,
      filter?: PartnersPayoutRequestFilter
    ) => `/PartnerAdmin/Payouts?type=${type || ""}&filter=${filter || ""}`,
  },

  get_payout: {
    method: "GET",
    url: (order_no: string) => `/PartnerAdmin/GetPayout
?order_no=${order_no}`,
  },

  list_partners_merchant: {
    method: "GET",
    url: "/PartnerAdmin/Merchants",
  },

  search_records: {
    method: "POST",
    url: (
      type: PartnersSearchRecordsRequestType,
      query: PartnersSearchRecordsRequestQuery
    ) => `/PartnerAdmin/SearchRecords?type=${type}&query=${query}`,
  },

  get_supported_countries: {
    method: "GET",
    url: "/PartnerAdmin/SupportedCountries",
  },
};
