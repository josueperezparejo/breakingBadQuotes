import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { QuoteResponse } from "../interfaces/quoteResponse";

interface InitialState {
  isLoading: boolean;
  quotes: Array<{ quote: string; author: string }>;
  hasError: boolean;
}

const initialState: InitialState = {
  isLoading: false,
  quotes: [
    { quote: "I hide in plain sight, same as you.", author: "Gustavo Fring" },
  ],
  hasError: false,
};

export const breakingSlice = createSlice({
  name: "breakingBad",
  initialState,
  reducers: {
    loadingQuotes: (state) => {
      state.isLoading = true;
      state.hasError = false;
    },
    setQuotes: (state, action: PayloadAction<QuoteResponse>) => {
      state.quotes.push(action.payload);
      state.isLoading = false;
      state.hasError = false;
    },
    setError: (state, action: PayloadAction<boolean>) => {
      state.hasError = action.payload;
      state.isLoading = false;
      state.quotes = [];
    },
  },
});
export const { loadingQuotes, setQuotes, setError } = breakingSlice.actions;
export default breakingSlice.reducer;
