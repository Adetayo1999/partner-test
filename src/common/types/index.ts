export type RequestMethodType = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

export type PartnersTransactionRequestType =
  | "pending"
  | "completed"
  | "mismatched"
  | "abandoned"
  | "expired";

export type PartnersTransactionRequestFilter = "daily" | "weekly" | "monthly";

export type PartnersPayoutRequestType = "initiated" | "completed" | "failed";

export type PartnersPayoutRequestFilter = "daily" | "weekly" | "monthly";

export type PartnersSearchRecordsRequestType = "payout" | "collection";

export type PartnersSearchRecordsRequestQuery =
  | "session_id"
  | "order_no"
  | "bank_ref"
  | "virtual_account";

export type PartnersSearchRecordsRequestBody = {
  text: string;
};

export interface ResolutionResultType {
  type: string;
  query: string;
  full_name: string;
  country: string;
  total_transaction: number;
  currency: string;
  total_payout: number;
  intrapay_merchant_id_imid: string;
  parnter_merchant_id_bmid: string;
  status: string;
  date_joined: string;
}
