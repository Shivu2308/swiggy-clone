import { createSlice } from "@reduxjs/toolkit";


const cordinatesSlice = createSlice({
    name : "cordinatesSlice",
    initialState : {
        cordinates : { lat: 22.7195687, lng: 75.8577258 },
    },
    reducers : {
        setCordinates : (state, actions) => {
            // console.log(actions.payload.locationLat);
            // console.log(actions.payload.locationLng);
            state.cordinates = {
                lat : actions.payload.locationLat,
                lng : actions.payload.locationLng
            }
        }
    }
})

export const {setCordinates} = cordinatesSlice.actions
export default cordinatesSlice.reducer;