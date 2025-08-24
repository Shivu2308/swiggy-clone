import React, { useContext, useState } from 'react';
import { CartContext } from '../context/contextApi';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartData, itemAddToCart, removeFromCart } from '../Utils/cartSlice';

const Cart = () => {
  // const [resInfoCart, setResInfoCart] = useState(1)
  // const { cartData, setCartData } = useContext(CartContext);
  const cartData = useSelector((state) => state.cartSlice.cartData)
  // console.log(cartData)

  // const restInfo = JSON.parse(localStorage.getItem("resInfo"))
  const resInfo = useSelector((state) => state.cartSlice.resInfo)
  // console.log(restInfo);

  const dispatch = useDispatch()


  let totalPrice = cartData?.reduce((acc, data) => acc + (data.finalPrice ? (data.finalPrice/100)*data.itemQuantity : (data.price / 100)*data.itemQuantity || (data.defaultPrice / 100)*data.itemQuantity), 0)
  // console.log(totalPrice)

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

  function incrementItemQuntity(info, resInfo){
    dispatch(itemAddToCart({ info, resInfo }))
  }

  function clearCartItem(){
    dispatch(clearCartData())
  }

  if (!cartData || cartData.length === 0) {
    return (
      <div className='flex justify-center items-center flex-col mt-28'>
        <div className='w-72'>
          <img
            className='w-full'
            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
            alt=""
          />
        </div>
        <div className='font-bold text-xl mt-5'>Your cart is empty</div>
        <div className='text-sm opacity-60 mt-1'>
          You can go to home page to view more restaurants
        </div>
        <Link to={"/"}>
          <button className='bg-[#ff5200] text-sm text-white font-bold px-4 py-3 mt-5'>
            SEE RESTAURANT NEAR YOU
          </button>
        </Link>
      </div>
    );
  }


  return (
    <div className='bg-[#e9ecee] w-full min-h-screen flex justify-center'>

      <div className='bg-[#fff] mt-10'>
        <div className='flex gap-3 mx-5 mt-5'>
          <div className='w-[16%]'>
            <img className='w-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${resInfo?.cloudinaryImageId}`} alt="" />
          </div>
          <div>
            <div className='text-base font-bold'>{resInfo.name}</div>
            <div className='text-xs font-semibold opacity-70'>{resInfo.areaName}</div>
          </div>
        </div>
        {cartData.map((data) => (
          <div
            key={data.id}
            className='flex items-center my-4 px-5 py-2 '
          >
            <span className='w-3 mr-2'><img className='w-full' src={data?.isVeg === 1 ? assets.vegClassifier : assets.NonVegClassifier} alt="" /></span>

            <span className='text-sm w-40 font-medium'>{data.name}</span>

            <div className='text-sm font-bold mx-5'>
              <span
                onClick={() => removeCartItem(data.id)}
                className='p-2 border border-r-0 cursor-pointer'>-</span>
              <span
                className='p-2 border border-x-0'>{data.itemQuantity}</span>
              <span
                onClick={() => incrementItemQuntity(data, resInfo)}
                className='p-2 border border-l-0 cursor-pointer text-green-500'>+</span>
            </div>

            <span className='text-xs font-semibold opacity-80 w-12'>₹{data.finalPrice ? (data.finalPrice/100)*data.itemQuantity : (data.price / 100)*data.itemQuantity || (data.defaultPrice / 100)*data.itemQuantity}</span>
          </div>
        ))}
        <div>
          {totalPrice}
        </div>
        <div>
          <button
          onClick={clearCartItem} className='p-3 bg-red-300'>clear cart</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
