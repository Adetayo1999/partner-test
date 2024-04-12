import { createSlice, isAnyOf } from "@reduxjs/toolkit";
import { getSupportedCountriesThunk } from "./thunk";

interface SupportedCountriesType {
  name: string;
  currency: string;
}

interface CountriesStateType {
  loading: boolean;
  data: SupportedCountriesType[] | null;
}

const initialState: CountriesStateType = {
  loading: false,
  data: null,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSupportedCountriesThunk.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getSupportedCountriesThunk.fulfilled, (state, action) => {
      state.data = action.payload;
    });

    builder.addMatcher(
      isAnyOf(
        getSupportedCountriesThunk.rejected,
        getSupportedCountriesThunk.fulfilled
      ),
      (state) => {
        state.loading = false;
      }
    );
  },
});

export default countriesSlice.reducer;
