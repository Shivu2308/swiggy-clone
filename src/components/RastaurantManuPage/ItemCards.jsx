import React from 'react'
import { assets } from '../../assets/assets';
import useItemCards from '../../hooks/RestaurantManuDataHooks/useItemCards';
import AddToCartBtn from '../AddToCartBtn';

const ItemCards = ({ info, resInfo }) => {

    const { imageId, name, defaultPrice, price, finalPrice, isVeg, description, id, addons, ribbon: { text }, ratings: { aggregatedRating: { rating, ratingCountV2 } } } = info;

    const [isdifferentRestaurant, setIsdifferentRestaurant, quantity, expanded, shortText, maxLenght, setExpanded, handleDifferentRasturant, clearCartItem] = useItemCards({id, description})



    return (
        <>
            <div key={id} className='flex justify-between gap-12 pb-12 pt-4'>
                <div className='my-auto'>
                    {isVeg ? (
                        <div className='flex gap-1'>
                            <span className='flex border-[2px] border-green-700 rounded-[5px] justify-center items-center'>
                                <div className='h-2 w-2 bg-green-600 rounded-full m-[3px]'></div>
                                {/* <img className='h-2 m-[3px]' src={assets.veg} alt="" /> */}
                            </span>
                            <span className='text-red-500 font-semibold text-sm opacity-80'>{text && text}</span>
                        </div>) :
                        (<div className='flex gap-1'>
                            <span className='flex border-[2px] border-red-700 rounded-[5px] justify-center items-center'>
                                <img className='h-[10px] m-[3px]' src={assets.nonveg} alt="" />
                            </span>
                            <span className='text-red-500 font-semibold text-sm opacity-80'>{text && text}</span>
                        </div>)}




                    <div className='font-extrabold opacity-80 mt-1 text-sm sm:text-base'> {name}</div>
                    {
                        finalPrice ?
                            <div className='font-bold flex items-center gap-1 mt-1'>
                                <span className='line-through opacity-50'>{price ? "₹" + price / 100 : "₹" + defaultPrice / 100}</span>
                                <span>{finalPrice ? finalPrice / 100 : ""}</span>
                                <img src={assets.tag} alt="" />
                            </div> :
                            <span className='font-bold mt-1'>{price ? "₹" + price / 100 : "₹" + defaultPrice / 100}</span>
                    }

                    {rating &&
                        <div className='flex gap-[2px] items-center mt-3'>


                            <span className='mb-[1px]'>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" ><rect width="14" height="14" fill="white"></rect><path d="M5.67163 3.99166C6.22068 2.34179 6.49521 1.51686 7 1.51686C7.50479 1.51686 7.77932 2.34179 8.32837 3.99166L8.65248 4.96556H9.60668C11.4122 4.96556 12.315 4.96556 12.4703 5.45302C12.6256 5.94049 11.8893 6.4628 10.4167 7.50744L9.67376 8.03444L9.97544 8.94095C10.5325 10.615 10.8111 11.452 10.4033 11.754C9.99553 12.056 9.27604 11.5457 7.83705 10.5249L7 9.93112L6.16295 10.5249C4.72396 11.5457 4.00447 12.056 3.5967 11.754C3.18893 11.452 3.46747 10.615 4.02456 8.94095L4.04557 8.87783C4.18081 8.47145 4.24843 8.26825 4.18684 8.08006C4.12525 7.89187 3.94958 7.76725 3.59824 7.51802C2.11566 6.46633 1.37437 5.94049 1.52971 5.45302C1.68504 4.96556 2.5878 4.96556 4.39332 4.96556H5.34752L5.67163 3.99166Z" fill={rating >= "3.0" ? "#1BA672" : rating >= "1.0" ? "#FF8C00" : "	#FF0000"} ></path></svg>
                            </span>

                            <span className={`text-sm font-bold ${rating >= 3.0 ? 'text-[#1BA672]' :
                                rating >= 1.0 ? 'text-[#FF8C00]' :
                                    'text-[#FF0000]'
                                }`}>
                                {rating}
                            </span>
                            <span className='text-sm font-bold opacity-60'>({ratingCountV2})</span>
                        </div>
                    }
                    <p
                        onClick={() => setExpanded(!expanded)}
                        className='max-w-md break-words text-xs sm:text-sm font-semibold mt-3 cursor-pointer'>
                        <span className='opacity-55'>{description ? (expanded ? description : shortText) : ""}</span>
                        {
                            description?.length > maxLenght &&
                            <span className='font-bold text-[#000]'>{`${expanded ? "less" : "more"}`}</span>
                        }
                    </p>
                </div>
                {imageId ?
                    <div className=' w-28 h-28 sm:w-40 sm:h-40 flex-shrink-0 relative '>
                        <img className='w-full h-full object-cover rounded-2xl' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="" />
                        <div className='relative bottom-6 left-1/2 -translate-x-1/2 text-center'>
                            <AddToCartBtn info={info} resInfo={resInfo} handleDifferentRasturant={handleDifferentRasturant} />
                            {addons &&
                                <span className={'text-[11px] font-semibold opacity-50 leading-none absolute right-[27%] ' + (quantity ? '-bottom-[38px]' : '-bottom-4')}>Customisable</span>
                            }
                        </div>
                    </div> :
                    <div className='relative text-center flex justify-center items-center flex-col gap-1 mx-5'>

                        <AddToCartBtn info={info} resInfo={resInfo} handleDifferentRasturant={handleDifferentRasturant} />

                        {addons &&
                            <span className='text-[11px] font-semibold opacity-50 leading-none'>Customisable</span>
                        }
                    </div>
                }

            </div>

            {isdifferentRestaurant &&
                <div className='w-full md:w-[50%] sm:w-[35%] border p-8 shadow-[0_0_15px_rgba(0,0,0,0.3)] fixed bottom-8 z-50 bg-white left-1/2 translate-x-[-50%]'>
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


export default ItemCards
