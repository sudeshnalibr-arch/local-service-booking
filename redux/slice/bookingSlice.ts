// src/redux/slices/bookingSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  selectedProvider: any | null;
  selectedDate: string | null;
  totalPrice: number;
}

const initialState: BookingState = {
  selectedProvider: null,
  selectedDate: null,
  totalPrice: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setProvider(state, action: PayloadAction<any>) {
      state.selectedProvider = action.payload;
    },
    setDate(state, action: PayloadAction<string>) {
      state.selectedDate = action.payload;
    },
    setTotalPrice(state, action: PayloadAction<number>) {
      state.totalPrice = action.payload;
    },
    resetBooking() {
      return initialState;
    },
  },
});

export const {
  setProvider,
  setDate,
  setTotalPrice,
  resetBooking,
} = bookingSlice.actions;

export default bookingSlice.reducer;
