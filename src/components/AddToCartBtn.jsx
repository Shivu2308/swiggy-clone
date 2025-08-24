import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { clearCartData, itemAddToCart, removeFromCart } from '../Utils/cartSlice';
import toast from 'react-hot-toast';
import useAddToCartBtn from '../hooks/utilsHooks/useAddToCartBtn';

const AddToCartBtn = ({ info, resInfo, handleDifferentRasturant }) => {
    // console.log( info);
const [quantity, addToCart, removeCartItem, incrementItemQuntity] = useAddToCartBtn({ info, resInfo, handleDifferentRasturant })
    return (
        <>
            {quantity > 0 ?

                <div className='text-sm font-bold mb-4'>
                    <div className='bg-white inline p-3 rounded-lg shadow-lg relative -bottom-3'>
                        <span
                            onClick={() => removeCartItem(info.id)}
                            className='px-3 py-2 rounded-l-xl cursor-pointer '>-</span>
                        <span
                            className='px-3 py-2 '>{quantity}</span>
                        <span
                            onClick={() => incrementItemQuntity(info, resInfo)}
                            className='px-3 py-2 rounded-r-xl cursor-pointer text-green-500'>+</span>
                    </div>
                </div> :
                <button
                    onClick={addToCart}
                    className='bg-[#ffffff] font-extrabold shadow-lg text-base text-[rgb(27,166,114)] px-10 py-2 border rounded-lg hover:bg-[rgba(189,191,194,0.99)] duration-200'>
                    ADD
                </button>}
        </>
    )
}

export default AddToCartBtn
