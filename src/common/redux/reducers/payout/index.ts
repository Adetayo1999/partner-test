import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getPayoutDetials, listPartnersPayoutThunk } from "./thunk";
import {
  PartnersPayoutRequestFilter,
  PartnersPayoutRequestType,
} from "@common/types";

interface PayoutType {
  type?: PartnersPayoutRequestType;
  amount: number;
  fee: number;
  order_no: number;
  status: PartnersPayoutRequestType;
  time_date: string;
}

export interface PayoutDetailsType {
  transaction_duration: string;
  currency: string;
  amount: number;
  fee: number;
  amount_paid: number;
  order_ref: 1234;
  bank_ref: string;
  time_date: string;
  sender_name: string;
  session_id: string;
  bank_name: string;
  account_number: string;
  account_name: string;
  txn_status: string;
  order_no: string;
}

interface PayoutStateType {
  loading: boolean;
  data: PayoutType[] | null;
  filter: PartnersPayoutRequestFilter | undefined;
  payout_details: PayoutDetailsType | null;
  loading_payout_details: boolean;
}

const initialState: PayoutStateType = {
  loading: false,
  data: null,
  filter: "monthly",
  loading_payout_details: false,
  payout_details: null,
};

const payoutSlice = createSlice({
  name: "payout",
  initialState,
  reducers: {
    setPayoutFilter(
      state,
      action: PayloadAction<PartnersPayoutRequestFilter | undefined>
    ) {
      state.filter = action.payload;
    },
    resetPayoutDetials(state) {
      state.payout_details = null;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(listPartnersPayoutThunk.pending, (state) => {
      state.loading = true;
    });

    builders.addCase(getPayoutDetials.pending, (state) => {
      state.loading_payout_details = true;
    });

    builders.addCase(listPartnersPayoutThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builders.addCase(getPayoutDetials.fulfilled, (state, action) => {
      state.payout_details = action.payload;
    });

    builders.addMatcher(
      isAnyOf(
        listPartnersPayoutThunk.fulfilled,
        listPartnersPayoutThunk.rejected
      ),
      (state) => {
        state.loading = false;
      }
    );

    builders.addMatcher(
      isAnyOf(getPayoutDetials.fulfilled, getPayoutDetials.rejected),
      (state) => {
        state.loading_payout_details = false;
      }
    );
  },
});

export const { setPayoutFilter, resetPayoutDetials } = payoutSlice.actions;

export default payoutSlice.reducer;
