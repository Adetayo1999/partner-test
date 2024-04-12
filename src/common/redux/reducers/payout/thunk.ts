import { requests } from "@common/services";
import {
  PartnersPayoutRequestFilter,
  PartnersPayoutRequestType,
} from "@common/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const listPartnersPayoutThunk = createAsyncThunk<
  any,
  {
    type?: PartnersPayoutRequestType;
    filter?: PartnersPayoutRequestFilter;
  }
>(
  "listPartnersPayoutThunk",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data: responseData } = await requests.listPartnersPayouts(
        data.type,
        data.filter
      );
      return fulfillWithValue(responseData.data);
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

export const getPayoutDetials = createAsyncThunk<
  any,
  {
    order_no: string;
  }
>("getPayoutDetials", async (data, { rejectWithValue, fulfillWithValue }) => {
  try {
    const { data: responseData } = await requests.getPayout(data.order_no);
    return fulfillWithValue(responseData.data);
  } catch (err: any) {
    toast.error(
      err?.response?.data?.message || err?.message || "Something went wrong"
    );
    return rejectWithValue(
      err?.response?.data || err?.message || "Something went wrong"
    );
  }
});
