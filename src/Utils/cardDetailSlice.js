import { createSlice } from "@reduxjs/toolkit";

const cardDetailSlice = createSlice({
  name: "cardDetailSlice",
  initialState: {
    cardDetailToggle: null,
    cardDetail : {}
  },
  reducers: {
    toggleCardDetail: (state, action) => {

        state.cardDetailToggle = state.cardDetailToggle === null ? action.payload : null;
        
    },
    setCardDetail : (state, action) => {
        state.cardDetail
    }
  },
});

export const { toggleCardDetail,  setCardDetail } = cardDetailSlice.actions;
export default cardDetailSlice.reducer;
