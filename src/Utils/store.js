import { configureStore } from "@reduxjs/toolkit";
import toggleSlice from './toggleSlice'
import cartSlice from './cartSlice'
import cordinatesSlice from './cordinatesSlice'
import filterSlilce from './filterSlice'
import authSlice from './authSlice'
import cardDetailSlice from './cardDetailSlice'



const store = configureStore ({
    reducer : {
       toggleSlice : toggleSlice,
    //    toggleSlice,              
       cartSlice : cartSlice,
       cordinatesSlice : cordinatesSlice,
       filterSlilce : filterSlilce,
       authSlice,
       cardDetailSlice,
    }
});

export default store;