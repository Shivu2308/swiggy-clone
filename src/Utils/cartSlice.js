import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: {
    cartData: JSON.parse(localStorage.getItem("cartData")) || [],
    resInfo: JSON.parse(localStorage.getItem("resInfo")) || [],
  },


  reducers: {


    itemAddToCart: (state, actions) => {
      //   console.log(actions);
      const { info, resInfo } = actions.payload;
      // setCartData(prev => isAdded ? [prev] : [...prev, info])
      const existingItem = state.cartData.find((item) => item.id === info.id);

      if (existingItem) {
        // Agar item already hai → quantity increment
        existingItem.itemQuantity = (existingItem.itemQuantity || 1) + 1;
      } else {
        // Agar nahi hai → quantity 1 set karke add karo
        state.cartData.push({ ...info, itemQuantity: 1 });
      }

      state.resInfo = resInfo;
      localStorage.setItem("cartData", JSON.stringify(state.cartData));
      localStorage.setItem("resInfo", JSON.stringify(resInfo));
    },



    removeFromCart: (state, action) => {
      const itemId = action.payload; // sirf id pass karenge

      const existingItem = state.cartData.find((item) => item.id === itemId);

      if (existingItem) {
        if (existingItem.itemQuantity > 1) {
          existingItem.itemQuantity -= 1; // quantity kam karo
        } else {
          // quantity 1 thi → item remove karo
          state.cartData = state.cartData.filter((item) => item.id !== itemId);
        }
      }

      // localStorage update
      if (state.cartData.length > 0) {
        localStorage.setItem("cartData", JSON.stringify(state.cartData));
      } else {
        state.cartData = [];
        state.resInfo = [];
        localStorage.removeItem("cartData");
        localStorage.removeItem("resInfo");
      }
    },


    clearCartData: (state) => {
      state.cartData = [];
      state.resInfo = [];
      localStorage.removeItem("cartData");
      localStorage.removeItem("resInfo");
    },
  },
});



export const { itemAddToCart, removeFromCart, clearCartData } = cartSlice.actions;
export default cartSlice.reducer;
