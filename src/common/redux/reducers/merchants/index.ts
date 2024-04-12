import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { listPartnersMerchant } from "./thunk";

interface MerchantType {
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

interface MerchantsStateType {
  loading: boolean;
  filter: string;
  data: MerchantType[] | null;
}

const initialState: MerchantsStateType = {
  loading: false,
  filter: "",
  data: null,
};

const merchantsSlice = createSlice({
  name: "merchants",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(listPartnersMerchant.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(listPartnersMerchant.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addMatcher(
      isAnyOf(listPartnersMerchant.rejected, listPartnersMerchant.fulfilled),
      (state) => {
        state.loading = false;
      }
    );
  },
});

export default merchantsSlice.reducer;
