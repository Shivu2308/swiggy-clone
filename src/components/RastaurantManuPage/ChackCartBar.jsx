import React from 'react'
import useChackCartBar from '../../hooks/RestaurantManuDataHooks/useChackCartBar'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const ChackCartBar = () => {

    const [showBar, showMenuBtn, cartData] = useChackCartBar()

    return (
        <div className={`w-full sm:w-[70vw] md:w-[70vw] lg:w-[52vw] fixed bottom-0 max-sm:right-0 z-0 ${showBar ? "bottom-0 duration-300 ease-in-out" : "-bottom-[100%]"}`}>
            <div className='relative my-2 w-full h-[70px]'>
                <div className={`h-full w-[70px] cursor-pointer rounded-full bg-[#000] text-[#ffffff] font-bold text-sm flex items-center justify-center absolute right-7 -z-10 ${showMenuBtn ? "bottom-0 duration-500 ease-in-out" : "-bottom-[2000%] "} `}>MENU</div>
            </div>
            {cartData.length > 0 && showBar &&
                <Link to={"/Cart"}>
                    <div className='cursor-pointer w-full bg-[#1ba672] flex items-center justify-between text-[#ffffff] font-bold py-3 px-5 duration-300'>
                        <span className='text-sm'>{cartData.length} item added</span>
                        <div className='flex items-center gap-2'><span>VIEW CART</span><img className='w-4' src={assets.chackout_cart} alt="" /></div>
                    </div>
                </Link>
            }
        </div>
    )
}
export default ChackCartBar
