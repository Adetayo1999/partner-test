import { combineReducers } from "@reduxjs/toolkit";
import summary from "../reducers/summary";
import transactions from "../reducers/transactions";
import payout from "../reducers/payout";
import merchants from "../reducers/merchants";
import countries from "../reducers/countries";

export const rootReducer = combineReducers({
  summary,
  transactions,
  payout,
  merchants,
  countries,
});
