import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'

const RasturantCards = ({ data: { info } }) => {

    // console.log(info)
    let { id, cloudinaryImageId, name, promoted, avgRating, costForTwoMessage, cuisines, sla: { slaString }, slugs : {city, restaurant} } = info
    
    return (
        <Link to={`/city/${city}/${restaurant}-${"rest" + id}`}>
            <div className='bg-white px-4 pt-5 pb-10 my-2 cursor-pointer flex items-center gap-4 flex-shrink-0'>
                <div className='relative w-24'>
                    {promoted &&
                    <span className='bg-black opacity-60 text-white font-bold text-xs rounded-md px-1 py-[2px] absolute top-1 left-0'>Ad</span>}
                    <div className='w-24  rounded-lg overflow-hidden'>
                        <img className='w-full aspect-1 object-cover' src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/${cloudinaryImageId}`} alt="" />
                    </div>
                    {info?.aggregatedDiscountInfoV3?.header &&
                        <div className='absolute left-1/2 -bottom-2 -translate-x-1/2 text-center'>
                            {info?.aggregatedDiscountInfoV3?.discountTag &&
                                <span className='bg-[#FF5200] text-white text-[9px] font-extrabold leading-none px-1 py-1 rounded-t-xl whitespace-nowrap'>
                                    {info?.aggregatedDiscountInfoV3?.discountTag}
                                </span>}

                            <div className='text-[#FF5200] flex items-center justify-center text-center flex-col bg-white w-fit rounded-lg px-2 py-[6px] shadow-lg '>
                                <span className='font-bold leading-none text-sm tracking-tighter whitespace-nowrap'>{info?.aggregatedDiscountInfoV3?.header}</span>
                                <span className='text-[8px] leading-none font-bold tracking-tighter whitespace-nowrap'>• {info?.aggregatedDiscountInfoV3?.subHeader} •</span>
                            </div>
                        </div>
                    }
                </div>

                <div>
                    <h1 className='font-bold text-[15px]'>{name}</h1>
                    <div className='text-xs sm:text-[13px] font-bold flex shrink-0 items-center gap-1 max-[360px]:flex-wrap text-[#7c7d7f] '>
                        <span><img src={assets.star} alt="star" /></span>
                        <p className='whitespace-nowrap'>{avgRating}</p>
                        <span className='whitespace-nowrap'> • {slaString} • </span>
                        <span className='whitespace-nowrap'>{costForTwoMessage} </span>
                    </div>
                    <div className='line-clamp-1 text-sm text-[#7c7d7f] text-wrap max-w-[250px]'>{(cuisines)?.join(", ")}</div>
                </div>
            </div>
        </Link>
    )
}

export default RasturantCards
