import { createSlice } from "@reduxjs/toolkit";


const filterSlilce = createSlice({
    name : "filterSlilce",
    initialState : {
        filterVal : null,
    },
    reducers : {
        setFilterVal : (state, action) => {
            state.filterVal = action.payload
        }
    }
})
export const { setFilterVal } = filterSlilce.actions;
export default filterSlilce.reducer;