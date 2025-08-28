import React, { useContext, useState } from 'react';
import { CartContext } from '../context/contextApi';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';
import { useDispatch, useSelector } from 'react-redux';
import { clearCartData, itemAddToCart, removeFromCart } from '../Utils/cartSlice';
import { useRazorpay } from 'react-razorpay';
import toast from 'react-hot-toast';

const Cart = () => {

  const { error, isLoading, Razorpay } = useRazorpay();
  // const [resInfoCart, setResInfoCart] = useState(1)
  // const { cartData, setCartData } = useContext(CartContext);
  const cartData = useSelector((state) => state.cartSlice.cartData)
  // console.log(cartData)

  // const restInfo = JSON.parse(localStorage.getItem("resInfo"))
  const resInfo = useSelector((state) => state.cartSlice.resInfo)
  // console.log(restInfo);

  const dispatch = useDispatch()



  let totalPrice = cartData?.reduce((acc, data) => acc + (data.finalPrice ? (data.finalPrice / 100) * data.itemQuantity : (data.price / 100) * data.itemQuantity || (data.defaultPrice / 100) * data.itemQuantity), 0)
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

  function incrementItemQuntity(info, resInfo) {
    dispatch(itemAddToCart({ info, resInfo }))
  }

  function clearCartItem() {
    dispatch(clearCartData())
  }

  const handlePayment = () => {
    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: totalPrice * 100, // paise me
      currency: "INR",
      name: "My App",
      description: "Test Transaction",

      handler: function (response) {
        toast.success("Payment Successful!");
        alert("Payment ID: " + response.razorpay_payment_id);
        // alert("Order ID: " + response.razorpay_order_id);
        // alert("Signature: " + response.razorpay_signature);
        
        dispatch(clearCartData())
        // Agar chahe to localStorage ya Redux me bhi save kar sakte ho
        // localStorage.setItem("lastPaymentId", response.razorpay_payment_id);
      },
      
      theme: {
        color: "#FF5200",
      },
    };

    const razorpayInstance = new Razorpay(options);
    razorpayInstance.open();
  };




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

      <div className='bg-[#fff] max-h-fit mt-10'>
        <div className='flex gap-3 mx-5 mt-5'>
          <div className='w-[16%]'>
            <img className='w-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_100,h_100,c_fill/${resInfo?.cloudinaryImageId}`} alt="" />
          </div>
          <div className='flex flex-col justify-between'>
            <div className='text-base font-bold'>{resInfo.name}</div>
            <div className='text-xs font-semibold opacity-70'>{resInfo.areaName}</div>
            <div className='bg-slate-600 h-[2px] w-14'></div>
          </div>
        </div>


        <div className='w-full px-5 max-h-1/2 overflow-y-scroll scrollbar-hide'>
          {cartData.map((data) => (
            <div
              key={data.id}
              className='flex items-center my-4 py-2 '
            >
              <span className='w-3 mr-4'><img className='w-full' src={data?.isVeg === 1 ? assets.vegclassifier : assets.nonvegclassifier} alt="" /></span>

              <span className='text-sm w-40 font-medium leading-none'>{data.name}</span>

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

              <span className='text-xs font-semibold opacity-80 w-12 text-center'>₹{data.finalPrice ? (data.finalPrice / 100) * data.itemQuantity : (data.price / 100) * data.itemQuantity || (data.defaultPrice / 100) * data.itemQuantity}</span>
            </div>
          ))}
        </div>

        <hr className='border-2 border-dotted clear-start my-2' />
        <div className='flex justify-between items-center px-5 font-semibold text-sm'> <span>TO PAY =</span> <span>₹{totalPrice}</span> </div>
        <hr className='border-2 border-dotted my-2' />


        <div>
        </div>
        <div className='flex justify-between items-center px-5 my-5'>
          <button onClick={clearCartItem} className='px-4 py-2 bg-red-300 rounded-3xl'>clear cart</button>
          <button onClick={handlePayment} className='px-4 py-2 bg-green-400 rounded-3xl'>Order Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
