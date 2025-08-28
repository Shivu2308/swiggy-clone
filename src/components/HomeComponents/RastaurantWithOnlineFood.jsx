import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import useRastaurantWithOnlineFood from '../../hooks/HomePageHooks/useRastaurantWithOnlineFood';
import RasturantCard from './RasturantCard';
import { assets } from '../../assets/assets';

const RastaurantWithOnlineFood = ({ title, data }) => {

    const [activeBtn, handleFilterBtn, filterOptions] = useRastaurantWithOnlineFood()


    return (
        <div className='mt-8 ml-4'>
            <div className="text-base sm:text-lg tracking-tighter font-extrabold">
                {title}
            </div>
            <div className='flex flex-wrap gap-2 mx-auto mt-3'>
                {filterOptions.map((filters) => (
                    <div key={filters.btnId}
                    onClick={()=> handleFilterBtn(filters.filterName)}
                        className={'flex items-center border border-[#D8D9DA] gap-2 p-2 rounded-3xl cursor-pointer shrink-0 shadow-[0_0_6px_rgba(0,0,0,0.1)] ' + (activeBtn === filters.filterName ? 'active' : '')}>
                        <span className='text-sm font-medium opacity-80'>{filters.filterName}</span>
                        {activeBtn === filters.filterName &&
                        <span className='w-4'><img className='w-full' src={assets.cancle} alt="" /></span>}
                    </div>
                ))}

            </div>

            <div className='flex flex-wrap gap-8 justify-evenly max-sm:justify-evenly lg:justify-evenly  px-1 mt-7'>
                {data?.map(({ info, cta: { link } }) => (

                    <div key={info.id} className='w-[274px] custom:w-[170px] lg:w-[274px] shrink-0 rounded-xl hover:scale-90 duration-100 cursor-pointer'>
                        <RasturantCard {...info} link={link} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RastaurantWithOnlineFood;
