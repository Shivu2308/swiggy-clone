import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleCardDetail } from "../../Utils/cardDetailSlice";
import { setSameRastaurantDetail } from "../../Utils/toggleSlice";
import { clearCartData } from "../../Utils/cartSlice";

const useDishesCards = ({info, resInfo}) => {
  const [isdifferentRestaurant, setIsdifferentRestaurant] = useState(false);

  let { id: itemId} = info;
  let { id, slugs: { city, restaurant } } = resInfo;

  
    const toggleCard = useSelector((state) => state.cardDetailSlice.cardDetailToggle)
    // console.log(toggleCard)

    const dispatch = useDispatch()

    function toggleDetails(info) {
        // setDekho((prev) => !prev)
        // console.log(id)
        dispatch(toggleCardDetail(info))
        // let card = info.filter((data) => data.id === id)
        // console.log(card)
    }
    function handleDifferentRasturant() {
        setIsdifferentRestaurant((prev) => !prev)
    }

    function clearCartItem() {
        dispatch(clearCartData())
        setIsdifferentRestaurant((prev) => !prev)
        // addToCart()
    }

    let getRestInfoFromLocalStorage = useSelector((state) => state.cartSlice.resInfo)
    // console.log(getRestInfoFromLocalStorage.id)
    // console.log(resInfo.id)

    function handleOpenSemRast() {
        if (getRestInfoFromLocalStorage?.sla?.restaurantId && getRestInfoFromLocalStorage?.sla?.restaurantId === resInfo?.sla?.restaurantId ||
            getRestInfoFromLocalStorage?.slugs?.restaurant && getRestInfoFromLocalStorage?.slugs?.restaurant === restaurant ||
            getRestInfoFromLocalStorage.length === 0 ||
            getRestInfoFromLocalStorage?.id && getRestInfoFromLocalStorage?.id === id
        ) {
            // dispatch(toggelSameDishRastPage())
            dispatch(setSameRastaurantDetail({
                isSameDishWithSameRast: true,
                city: city,
                resLocation: restaurant,
                resId: id,
                itemId: itemId,
            }))
        }
    }


  return [isdifferentRestaurant, setIsdifferentRestaurant, toggleCard, toggleDetails, handleDifferentRasturant, clearCartItem, handleOpenSemRast];
};

export default useDishesCards;
