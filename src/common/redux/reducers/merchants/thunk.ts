import { requests } from "@common/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const listPartnersMerchant = createAsyncThunk(
  "listPartnersMerchant",
  async (_, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data } = await requests.listPartnersMerchant();
      return fulfillWithValue(data.data);
    } catch (err: any) {
      toast.error(
        err?.response?.data?.message || err?.message || "Something went wrong"
      );
      return rejectWithValue(
        err?.response?.data || err?.message || "Something went wrong"
      );
    }
  }
);
