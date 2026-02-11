import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/CartSlice";
import providerReducer from "@/redux/slice/providerSlice"
import bookingReducer from "@/redux/slice/bookingSlice"

export const store = configureStore({
  reducer: {
    providers: providerReducer,
    booking: bookingReducer,
     cart: cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// redux/store.ts
