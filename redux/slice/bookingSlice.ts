import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BookingState {
  provider: any | null;
  date: string | null;
  time: string | null;
  totalAmount?: number;
}

const initialState: BookingState = {
  provider: null,
  date: null,
  time: null,
   totalAmount: 0,
};

const bookingSlice = createSlice({
  name: "booking",
  initialState,
  reducers: {
    setBooking: (state, action: PayloadAction<BookingState>) => {
      state.provider = action.payload.provider;
      state.date = action.payload.date;
      state.time = action.payload.time;
       if (action.payload.totalAmount !== undefined) {
        state.totalAmount = action.payload.totalAmount;
       }
    },

    clearBooking: (state) => {
      state.provider = null;
      state.date = null;
      state.time = null;
      state.totalAmount=0;
    },
  },
});

export const { setBooking, clearBooking } = bookingSlice.actions;
export default bookingSlice.reducer;
