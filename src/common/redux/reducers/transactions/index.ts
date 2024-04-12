import { PayloadAction, createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getTransactionDetials, listPartnersTransactionThunk } from "./thunk";
import {
  PartnersTransactionRequestFilter,
  PartnersTransactionRequestType,
} from "@common/types";

interface TransactionType {
  type?: PartnersTransactionRequestType;
  amount: number;
  fee: number;
  settled: number;
  order_no: number;
  status: PartnersTransactionRequestType;
  time_date: string;
}

export interface TransactionDetialsType {
  transaction_duration: string;
  currency: string;
  amount: number;
  fee: number;
  amount_paid: number;
  order_ref: number;
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

interface TransactionStateType {
  loading: boolean;
  data: TransactionType[] | null;
  filter: PartnersTransactionRequestFilter | undefined;
  transaction_details: TransactionDetialsType | null;
  loading_tx_details: boolean;
}

const initialState: TransactionStateType = {
  loading: false,
  data: null,
  filter: "monthly",
  loading_tx_details: false,
  transaction_details: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    setTransactionFilter(
      state,
      action: PayloadAction<PartnersTransactionRequestFilter | undefined>
    ) {
      console.log("here now");
      state.filter = action.payload;
    },
    resetTransactionDetials(state) {
      state.transaction_details = null;
    },
  },
  extraReducers: (builders) => {
    builders.addCase(listPartnersTransactionThunk.pending, (state) => {
      state.loading = true;
    });

    builders.addCase(getTransactionDetials.pending, (state) => {
      state.loading_tx_details = true;
    });

    builders.addCase(
      listPartnersTransactionThunk.fulfilled,
      (state, action) => {
        state.data = action.payload;
      }
    );

    builders.addCase(getTransactionDetials.fulfilled, (state, action) => {
      state.transaction_details = action.payload;
    });

    builders.addMatcher(
      isAnyOf(
        listPartnersTransactionThunk.fulfilled,
        listPartnersTransactionThunk.rejected
      ),
      (state) => {
        state.loading = false;
      }
    );

    builders.addMatcher(
      isAnyOf(getTransactionDetials.fulfilled, getTransactionDetials.rejected),
      (state) => {
        state.loading_tx_details = false;
      }
    );
  },
});

export const { setTransactionFilter, resetTransactionDetials } =
  transactionSlice.actions;

export default transactionSlice.reducer;
