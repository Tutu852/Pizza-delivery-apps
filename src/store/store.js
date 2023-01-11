import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./shopping_cart/cartSlice";
import cartUiSlice from "./shopping_cart/cartUiSlice";


const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
    cartui:cartUiSlice.reducer,
    
  },
});

export default store;
