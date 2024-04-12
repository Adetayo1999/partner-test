import { requests } from "@common/services";
import {
  PartnersTransactionRequestFilter,
  PartnersTransactionRequestType,
} from "@common/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

export const listPartnersTransactionThunk = createAsyncThunk<
  any,
  {
    type?: PartnersTransactionRequestType;
    filter?: PartnersTransactionRequestFilter;
  }
>(
  "listPartnersTransactionThunk",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data: responseData } = await requests.listPartnersTransactions(
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

export const getTransactionDetials = createAsyncThunk<
  any,
  {
    order_no: string;
  }
>(
  "getTransactionDetials",
  async (data, { rejectWithValue, fulfillWithValue }) => {
    try {
      const { data: responseData } = await requests.getTransaction(
        data.order_no
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
