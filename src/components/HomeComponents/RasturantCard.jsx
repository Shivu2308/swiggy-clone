import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const RasturantCard = ( info ) => {
    // console.log((info.link).split("/").at(4));
    let city = (info.link).split("/").at(4)
    let link = (info.link).split("/").at(-1)
    
    return (
  
        <Link to={`/city/${city}/${link}`}>
            <div className='w-full h-32 lg:h-[182px] rounded-xl overflow-hidden relative'>
                <img
                    key={info.id}
                    className="w-full h-full object-cover"
                    src={`https://media-assets.swiggy.com/swiggy/image/upload/${info.cloudinaryImageId}`}
                    alt=""
                />
                <div className='absolute bg-gradient-to-t from-[rgba(0,0,0,1)] to-[rgba(0,0,0,0.01)] w-full h-[50%] bottom-0 text-[#ffffff] font-extrabold md:text-base lg:text-lg'><span className='absolute bottom-0 p-2 opacity-90'>
                    {(info.aggregatedDiscountInfoV3?.header ? info.aggregatedDiscountInfoV3?.header : "") + " " + (info.aggregatedDiscountInfoV3?.subHeader ? info.aggregatedDiscountInfoV3?.subHeader : "")}
                </span></div>
            </div>
            <div className='p-3'>
                <div className='font-bold md:text-base lg:text-lg leading-none'>{info.name}</div>
                <div className='flex gap-1 font-semibold'><span><img src={assets.reting} alt="" /></span><span className='opacity-80'>{info?.avgRating} •</span><span className='opacity-80'>{info?.sla?.slaString}</span></div>
                <div className='font-medium text-sm opacity-70 truncate w-full'>{(info?.cuisines).join(", ")}</div>
                <div className='font-medium text-sm opacity-70'>{info?.areaName}</div>
            </div>
        </Link>
    )
}

export default RasturantCard
