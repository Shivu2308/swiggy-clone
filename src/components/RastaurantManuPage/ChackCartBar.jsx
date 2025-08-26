import React from 'react'
import useChackCartBar from '../../hooks/RestaurantManuDataHooks/useChackCartBar'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ChackCartBar = () => {

    const [showBar, showMenuBtn, cartData] = useChackCartBar()

    return (
        <div className={`w-full sm:w-[70vw] md:w-[70vw] lg:w-[52vw] fixed bottom-0 max-sm:right-0 z-0 ${showBar ? "bottom-0 duration-300 ease-in-out" : "-bottom-[2000%]"}`}>
                <div className={`h-[70px] w-[70px] cursor-pointer rounded-full bg-[#000] text-[#ffffff] font-bold text-sm flex items-center justify-center absolute right-7 -z-10 ${showMenuBtn ? (cartData.length > 0 ? "bottom-14 duration-500 ease-in-out" : "bottom-5")  : "-bottom-20"} `}>MENU</div>
            {cartData.length > 0 && showBar &&
                <Link to={"/Cart"}>
                    <div className='cursor-pointer w-full bg-[#1ba672] flex items-center justify-between text-[#ffffff] font-bold py-3 px-5 duration-300'>
                        <span className='text-sm'>{cartData.length} item added</span>
                        <div className='flex items-center gap-2'><span>VIEW CART</span><img className='w-4' src={assets.chackoutcart} alt="" /></div>
                    </div>
                </Link>
            }
        </div>
    )
}
export default ChackCartBar
