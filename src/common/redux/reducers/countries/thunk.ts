import { requests } from "@common/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const getSupportedCountriesThunk = createAsyncThunk(
  "getSupportedCountriesThunk",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await requests.getSupportedCountries();
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
