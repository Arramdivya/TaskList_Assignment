import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BasketState = {
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
      state.items[action.payload] =
        (state.items[action.payload] || 0) + 1;
    },
    removeItem(state, action: PayloadAction<string>) {
      if (state.items[action.payload] > 1) {
        state.items[action.payload]--;
      } else {
        delete state.items[action.payload];
      }
    },
  },
});

export const { addItem, removeItem } = basketSlice.actions;
export default basketSlice.reducer;
