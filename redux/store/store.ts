import { configureStore } from "@reduxjs/toolkit";
import providerReducer from "@/redux/slice/providerSlice"
import bookingReducer from "@/redux/slice/bookingSlice"

export const store = configureStore({
  reducer: {
    providers: providerReducer,
    booking: bookingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
