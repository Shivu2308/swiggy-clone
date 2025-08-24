import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCartData } from '../../Utils/cartSlice';

const useItemCards = ({id, description}) => {
    
      const [isdifferentRestaurant, setIsdifferentRestaurant] = useState(false)

      const [expanded, setExpanded] = useState(false);
    
    
      // const { cartData, setCartData } = useContext(CartContext)
      const cartData = useSelector((state) => state.cartSlice.cartData)
    
      // Cart me se current item ka quantity nikal lo
      const cartItem = cartData.find(item => item.id === id);
      const quantity = cartItem?.itemQuantity || 0;
    
      const dispatch = useDispatch()
    
    
      // console.log(info);
    
      const maxLenght = 110
      const shortText = description?.length > maxLenght ? description.slice(0, maxLenght).trim(" ") + "..." : description;
    
      function handleDifferentRasturant() {
        setIsdifferentRestaurant((prev) => !prev)
      }
    
      function clearCartItem() {
        dispatch(clearCartData())
        setIsdifferentRestaurant((prev) => !prev)
        // addToCart()
      }


  return [isdifferentRestaurant, setIsdifferentRestaurant, quantity, expanded, shortText, maxLenght, setExpanded, handleDifferentRasturant, clearCartItem]
}

export default useItemCards
