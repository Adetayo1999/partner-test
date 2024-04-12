import { createSlice } from "@reduxjs/toolkit";
import { getSummaryThunk } from "./thunk";

interface PartnerAdminMetricsData {
  total_order: {
    amount: number;
    currency: string;
    total_count: number;
  };
  pending_txn: {
    amount: number;
    currency: string;
    total_count: number;
  };
  mismatched_txn: {
    amount: number;
    currency: string;
    total_count: number;
  };
  expired_txn: {
    amount: number;
    currency: string;
    total_count: number;
  };
  total_user: number;
}

interface SummaryStateType {
  loading: boolean;
  data: PartnerAdminMetricsData | null;
}

const initialState: SummaryStateType = {
  loading: false,
  data: null,
};

const summarySlice = createSlice({
  name: "summary",
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(getSummaryThunk.pending, (state) => {
      state.loading = true;
    });

    builders.addCase(getSummaryThunk.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
    });

    builders.addCase(getSummaryThunk.rejected, (state) => {
      state.loading = false;
    });
  },
});

export default summarySlice.reducer;
