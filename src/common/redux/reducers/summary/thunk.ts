import { requests } from "@common/services";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSummaryThunk = createAsyncThunk(
  "getSummaryThunk",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requests.getPartnersSummary();
      return fulfillWithValue(data.data);
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
