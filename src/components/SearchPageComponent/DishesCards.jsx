import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { toggleCardDetail } from '../../Utils/cardDetailSlice';
import { setSameRastaurantDetail } from '../../Utils/toggleSlice';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import AddToCartBtn from '../AddToCartBtn';
import { clearCartData } from '../../Utils/cartSlice';
import useDishesCards from '../../hooks/SearchPageHooks/useDishesCards';


const DishesCards = ({ data: { info, restaurant: { info: resInfo }, hideRestaurantDetails = false } }) => {

    

    // console.log(resInfo)
    let { id: itemId, name, isVeg, price, defaultPrice, imageId } = info;
    let { id, name: resName, avgRating, sla: { slaString }, slugs: { city, restaurant } } = resInfo;

    const [isdifferentRestaurant, setIsdifferentRestaurant, toggleCard, toggleDetails, handleDifferentRasturant, clearCartItem, handleOpenSemRast] = useDishesCards({info, resInfo})

    return (
        <>
            <div className={`h-screen w-full absolute top-0 left-0 z-40  ${toggleCard?.id === info?.id ? "visible" : "invisible"}`}>
                <div
                    onClick={toggleDetails}
                    className={`h-full w-full bg-[#050a13db] opacity-80 `}>
                </div>
                <div className="bg-white w-1/3 rounded-2xl shadow-lg absolute top-1/2 -translate-y-1/2  left-1/2 -translate-x-1/2 overflow-hidden">
                    <div className='relative'>
                        <img className='w-full aspect-[1.2] object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${toggleCard?.imageId}`} alt="" />
                        <div
                            onClick={toggleDetails}
                            className=' p-1 rounded-full bg-[#ffffff]  absolute top-[5%] right-[5%] cursor-pointer'>
                            <img className='w-5' src={assets.cancle} alt="" />
                        </div>
                    </div>
                    <div className='p-4 flex justify-between items-center'>
                        <div>
                            <div className='w-4'>
                                <img className='w-4' src={info.isVeg ? assets.vegClassifier : assets.NonVegClassifier} alt="" />
                            </div>
                            <h1 className='font-bold text-lg text-[#414449] mt-1'>{info.name}</h1>
                            <div className='font-semibold text-[15px] '>{info.price ? "₹" + info.price / 100 : "₹" + info.defaultPrice / 100}</div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <button
                                className='bg-[#ffffff] mr-7 font-extrabold shadow-lg text-base text-[rgb(27,166,114)] px-10 py-2 border rounded-lg hover:bg-[rgba(189,191,194,0.99)] duration-200'>
                                ADD
                            </button>
                        </div>
                    </div>
                    {info?.description &&
                        <div className='px-5 line-clamp-3 font-medium text-sm text-[#666768] mb-5'>{info?.description}</div>}
                </div>
            </div>

            <div className=' bg-white rounded-2xl px-4 pt-5'>
                {!hideRestaurantDetails && <>
                    <Link to={`/city/${city}/${restaurant}-${"rest" + id}`}>
                        <div className='flex justify-between items-center cursor-pointer'>
                            <div >
                                <div className='font-extrabold text-[13px] text-[#4D5054]'>{resName}</div>
                                <div className='flex items-center text-[13px] text-[#4D5054] font-medium'>
                                    <span><img className='invert-0' src={assets.star} alt="" /></span>
                                    <span>{avgRating} • </span>.
                                    <span> {slaString}</span>
                                </div>
                            </div>
                            <div className='w-6 opacity-60'>
                                <img className='w-full' src={assets.rightArrow} alt="" />
                            </div>
                        </div>
                    </Link>
                    <hr className='my-3 border-t-2 border-dotted' />
                </>}

                <div className='flex justify-between mt-6'>
                    <div className='w-40 pb-5'>
                        <div className='w-4'>
                            <img className='w-full' src={isVeg ? assets.vegClassifier : assets.NonVegClassifier} alt="" />
                        </div>
                        <h1 className='font-bold text-lg text-[#414449] mt-1'>{name}</h1>
                        <div className='font-semibold text-[15px] '>{price ? "₹" + price / 100 : "₹" + defaultPrice / 100}</div>
                        <div
                            onClick={() => toggleDetails(info)}
                            className='flex w-fit opacity-60 border-2 rounded-3xl px-2 cursor-pointer mt-3'>
                            <span className='text-[13px] font-bold'>More Details</span>
                            <span className='w-4 mt-[2px]'> <img className='w-full' src={assets.right} alt="" /></span>
                        </div>
                    </div>
                    {imageId ?
                        <div className=' w-40  overflow-hidden'>
                            <img className='object-cover rounded-xl h-40 w-full' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${imageId}`} alt="" />
                            <div
                                onClick={() => handleOpenSemRast()}
                                className='inline-block relative bottom-5 left-[50%] -translate-x-1/2'>
                                <AddToCartBtn info={info} resInfo={resInfo} handleDifferentRasturant={handleDifferentRasturant} />
                            </div>
                        </div> :
                        <div className='flex items-center justify-center mr-6'>
                            <AddToCartBtn info={info} resInfo={resInfo} handleDifferentRasturant={handleDifferentRasturant} />
                        </div>

                    }
                </div>
            </div>


            {isdifferentRestaurant &&
                <div className='w-[35%] border p-8 shadow-[0_0_15px_rgba(0,0,0,0.3)] fixed bottom-8 z-50 bg-white left-1/2 translate-x-[-50%]'>
                    <h1 className='font-bold text-xl'>Items already in cart</h1>
                    <div className='text-sm opacity-80 mt-2'>Your cart contains items from other restaurant. Would you like to reset your cart for adding items from this restaurant?</div>
                    <div className='flex mt-5 gap-5 font-bold text-base'>
                        <button
                            onClick={() => setIsdifferentRestaurant((prev) => !prev)}
                            className='text-[#1ba672] border-2 border-[#1ba672] w-full p-3 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] cursor-pointer' >NO</button>
                        <button
                            onClick={clearCartItem}
                            className='text-[#ffffff] bg-[#1ba672] border-2 border-[#1ba672] w-full p-3 hover:shadow-[0_0_15px_rgba(0,0,0,0.3)] cursor-pointer'>Yes, start afresh</button>
                    </div>
                </div>
            }
        </>
    )
}

export default DishesCards
