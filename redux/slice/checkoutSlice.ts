
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

/* =======================
   TYPES
======================= */

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
}

interface BookingState {
  provider: any | null;
  date: string | null;
  time: string | null;
  totalAmount?: number;

  items: CartItem[];
  totalPrice: number;
}

/* =======================
   INITIAL STATE
======================= */

const initialState: BookingState = {
  provider: null,
  date: null,
  time: null,
  totalAmount: 0,
  items: [],
  totalPrice: 0,
};

/* =======================
   HELPERS
======================= */

const calculateTotal = (items: CartItem[]) => {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
};

/* =======================
   SLICE
======================= */

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    /* ========= BOOKING ========= */
    // setBooking: (state, action: PayloadAction<BookingState>) => {
    //   state.provider = action.payload.provider;
    //   state.date = action.payload.date;
    //   state.time = action.payload.time;

    //   if (action.payload.totalAmount !== undefined) {
    //     state.totalAmount = action.payload.totalAmount;
    //   }
    // },

    setBooking: (state, action: PayloadAction<Partial<BookingState>>) => {
  if (action.payload.provider !== undefined) {
    state.provider = action.payload.provider;
  }
  if (action.payload.date !== undefined) {
    state.date = action.payload.date;
  }
  if (action.payload.time !== undefined) {
    state.time = action.payload.time;
  }
  if (action.payload.totalAmount !== undefined) {
    state.totalAmount = action.payload.totalAmount;
  }
},


    clearBooking: (state) => {
      state.provider = null;
      state.date = null;
      state.time = null;
      state.totalAmount = 0;
    },

    /* ========= CART ========= */

    addToCart: (
      state,
      action: PayloadAction<{ id: number; name: string; price: number }>
    ) => {
      const existing = state.items.find((i) => i.id === action.payload.id);

      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }

      state.totalPrice = calculateTotal(state.items);
    },

    increaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) item.quantity += 1;
      state.totalPrice = calculateTotal(state.items);
    },

    decreaseQty: (state, action: PayloadAction<number>) => {
      const item = state.items.find((i) => i.id === action.payload);
      if (item) {
        item.quantity -= 1;
        if (item.quantity <= 0) {
          state.items = state.items.filter((i) => i.id !== action.payload);
        }
      }
      state.totalPrice = calculateTotal(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const {
  setBooking,
  clearBooking,
  addToCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = checkoutSlice.actions;

export default checkoutSlice.reducer;