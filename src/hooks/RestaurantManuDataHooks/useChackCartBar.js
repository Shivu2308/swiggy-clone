import React, { useState } from "react";
import { useSelector } from "react-redux";

const useChackCartBar = () => {
  const [showBar, setShowBar] = useState(false);
  const [showMenuBtn, setShowMenuBtn] = useState(false);

  const cartData = useSelector((state) => state.cartSlice.cartData);
  // console.log(cartData)

  setTimeout(() => {
    setShowBar(true);
  }, 500);

  setTimeout(() => {
    setShowMenuBtn(true);
  }, 1000);

  return [showBar, showMenuBtn, cartData];
};

export default useChackCartBar;
