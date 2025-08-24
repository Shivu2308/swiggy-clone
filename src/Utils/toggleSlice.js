import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
  name: "toggleSlice",
  initialState: {
    searchToggle: false,
    logInBarToggle: false,
    isdifferentRestaurant: false,
    sameDishRastPage: {
      isSameDishWithSameRast: false,
      city: "",
      resLocation: "",
      resId: "",
      itemId: "",
    },
  },
  reducers: {
    toggleSearchBar: (state) => {
      state.searchToggle = !state.searchToggle;
    },
    toggleLoginBar: (state) => {
      state.logInBarToggle = !state.logInBarToggle;
    },
    toggleIsdifferentRestaurant: (state) => {
      state.isdifferentRestaurant = !state.isdifferentRestaurant;
    },

    setSameRastaurantDetail: (state, action) => {
      state.sameDishRastPage = action.payload;
    },
    resetSameRastaurantDetail: (state) => {
      state.sameDishRastPage = {
        isSameDishWithSameRast: false,
        city: "",
        resLocation: "",
        resId: "",
        itemId: "",
      };
    },
  },
});

export const {
  toggleSearchBar,
  toggleLoginBar,
  toggleIsdifferentRestaurant,
  setSameRastaurantDetail,
  resetSameRastaurantDetail,
} = toggleSlice.actions;
export default toggleSlice.reducer;
