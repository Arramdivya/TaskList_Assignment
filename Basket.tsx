import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type BasketItem = {
  productId: string;
  quantity: number;
};

export type BasketState = {
  items: Record<string, number>; 
};

const initialState: BasketState = {
  items: {},
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<string>) {
      const productId = action.payload;
      state.items[productId] = (state.items[productId] || 0) + 1;
    },

    removeItem(state, action: PayloadAction<string>) {
      const productId = action.payload;
      if (!state.items[productId]) return;

      if (state.items[productId] > 1) {
        state.items[productId] -= 1;
      } else {
        delete state.items[productId];
      }
    },

    clearItem(state, action: PayloadAction<string>) {
      delete state.items[action.payload];
    },

    clearBasket(state) {
      state.items = {};
    },
  },
});

export const {
  addItem,
  removeItem,
  clearItem,
  clearBasket,
} = basketSlice.actions;

export default basketSlice.reducer;
