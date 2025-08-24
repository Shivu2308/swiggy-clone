import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import toast from 'react-hot-toast';
import { itemAddToCart, removeFromCart } from '../../Utils/cartSlice';

const useAddToCartBtn = ({ info, resInfo, handleDifferentRasturant }) => {

    

    const cartData = useSelector((state) => state.cartSlice.cartData)
    // Cart me se current item ka quantity nikal lo
    const cartItem = cartData.find(item => item.id === info.id);
    const quantity = cartItem?.itemQuantity || 0;

    const dispatch = useDispatch()

    let getRestInfoFromLocalStorage = useSelector((state) => state.cartSlice.resInfo)

    function addToCart() {
        // console.log(resInfo)
        const isAdded = cartData.find((dish) => dish.id === info.id)
        // let getRestInfoFromLocalStorage = JSON.parse(localStorage.getItem("resInfo")) || []
        // console.log(getRestInfoFromLocalStorage.id)
        // console.log(resInfo.id === getRestInfoFromLocalStorage?.id)

        if (!isAdded) {
            if (getRestInfoFromLocalStorage?.sla?.restaurantId && getRestInfoFromLocalStorage?.sla?.restaurantId === resInfo?.sla?.restaurantId ||
                getRestInfoFromLocalStorage?.slugs?.restaurant && getRestInfoFromLocalStorage?.slugs?.restaurant === resInfo?.slugs?.restaurant ||
                getRestInfoFromLocalStorage.length === 0 ||
                getRestInfoFromLocalStorage?.id && getRestInfoFromLocalStorage?.id === resInfo.id
            ) {
                // setCartData(prev => isAdded ? [prev] : [...prev, info])
                // localStorage.setItem("cartData", JSON.stringify([...cartData, info]))
                // localStorage.setItem("resInfo", JSON.stringify(resInfo))
                dispatch(itemAddToCart({ info, resInfo }))
                toast.success("item added")
            } else {
                // toast.error("different restaurant")
                handleDifferentRasturant()
                // setIsdifferentRestaurant((prev) => !prev)
            }
        } else {
            dispatch(itemAddToCart({ info, resInfo }))
            // toast.error("Already Added")
            // alert("Already Added")
        }
    }

    function removeCartItem(id) {
        // console.log(id)
        // const items = cartData.filter((data) => data.id !== id);
        // console.log(items)
        // setCartData(items);
        dispatch(removeFromCart(id))
        // if (items.length > 0) {
        //   localStorage.setItem("cartData", JSON.stringify(items));
        // } else {
        //   localStorage.removeItem("cartData");
        //   localStorage.removeItem("resInfo")
        // }
    }


    function incrementItemQuntity(info, resInfo) {
        dispatch(itemAddToCart({ info, resInfo }))
    }

    // function clearCartItem() {
    //     dispatch(clearCartData())
    //     setIsdifferentRestaurant((prev) => !prev)
    //     // addToCart()
    // }

  return [quantity, addToCart, removeCartItem, incrementItemQuntity]
}

export default useAddToCartBtn
