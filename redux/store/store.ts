import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../slice/CartSlice";
import providerReducer from "@/redux/slice/providerSlice"
import bookingReducer from "@/redux/slice/bookingSlice"
import authSlice from "../slice/authSlice";

export const store = configureStore({
  reducer: {
    providers: providerReducer,
    booking: bookingReducer,
     cart: cartReducer,
     auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// redux/store.ts
