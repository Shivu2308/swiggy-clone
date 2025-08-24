import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import useRastaurantWithOnlineFood from '../../hooks/HomePageHooks/useRastaurantWithOnlineFood';
import RasturantCard from './RasturantCard';
import { assets } from '../../assets/assets';

const RastaurantWithOnlineFood = ({ title, data }) => {

    const [activeBtn, handleFilterBtn, filterOptions] = useRastaurantWithOnlineFood()

  

// console.log(filterOptions)

    // console.log(data)
    return (
        <div className='mt-8 ml-4'>
            <div className="text-xl font-extrabold">
                {title}
            </div>
            <div className='flex gap-2 mt-3'>
                <div className='flex items-center border border-[#D8D9DA] gap-2 p-2 rounded-3xl cursor-pointer shadow-[0_0_6px_rgba(0,0,0,0.1)]'>
                    <span className='text-sm font-medium opacity-80'>Filter</span><span className='w-4'><img className='w-full' src={assets.filter} alt="" /></span>
                </div>
                <div className='flex items-center border border-[#D8D9DA] gap-2 p-2 rounded-3xl cursor-pointer shadow-[0_0_6px_rgba(0,0,0,0.1)]'>
                    <span className='text-sm font-medium opacity-80'>Short By</span><span className='w-4'><img className='w-full' src={assets.downArrow} alt="" /></span>
                </div>

                {filterOptions.map((filters) => (
                    <div key={filters.btnId}
                    onClick={()=> handleFilterBtn(filters.filterName)}
                        className={'flex items-center border border-[#D8D9DA] gap-2 p-2 rounded-3xl cursor-pointer shadow-[0_0_6px_rgba(0,0,0,0.1)] ' + (activeBtn === filters.filterName ? 'active' : '')}>
                        <span className='text-sm font-medium opacity-80'>{filters.filterName}</span>
                        {activeBtn === filters.filterName &&
                        <span className='w-4'><img className='w-full' src={assets.cancle} alt="" /></span>}
                    </div>
                ))}

            </div>

            <div className='flex flex-wrap gap-8 px-1 mt-7'>
                {data?.map(({ info, cta: { link } }) => (

                    <div key={info.id} className='w-[274px] rounded-xl hover:scale-90 duration-100 cursor-pointer'>
                        <RasturantCard {...info} link={link} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RastaurantWithOnlineFood;
