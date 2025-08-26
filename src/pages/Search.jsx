import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import { toggleCardDetail } from '../Utils/cardDetailSlice'
import { Link } from 'react-router-dom'

import { clearCartData } from '../Utils/cartSlice'
import { resetSameRastaurantDetail, setSameRastaurantDetail } from '../Utils/toggleSlice'
import AddToCartBtn from '../components/AddToCartBtn'
import { SearchShimmer } from '../components/Shimmer'
import DishesCards from '../components/SearchPageComponent/DishesCards'
import RasturantCards from '../components/SearchPageComponent/RasturantCards'
import DishesWuthSemRastaurant from '../components/SearchPageComponent/DishesWuthSemRastaurant'
import useSearch from '../hooks/SearchPageHooks/useSearch'

const Search = () => {

    const [dishes, rastaurantsData, sameDish, sameDishWithRast, activeBtn, loading, filterOptions, handleFilterBtn, handleSearchQuery] = useSearch()


    return (
        <div className='w-full lg:w-[80%] xl:w-[58%] mx-auto'>
            <div className='relative max-lg:mx-8 '>
                <input
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearchQuery}
                    className='border-2 rounded p-3 w-full mt-12 font-bold  focus:outline-none first-letter:uppercase' type="text" placeholder='Search for restaurants and food' />
                <div className='w-5 absolute right-3 bottom-3 '>
                    <img className='w-full' src={assets.search} alt="" />
                </div>
            </div>
            {loading ? (<div className='w-full max-sm:mx-4 '><SearchShimmer /></div>) : (<>
                {dishes.length === 0 ? "" :
                    (<>
                        <div className='flex gap-2 mx-8 mt-5'>
                            {!sameDish && filterOptions.map((filters) => (
                                <div
                                    onClick={() => handleFilterBtn(filters.filterName)}
                                    key={filters.btnId}
                                    className={'flex items-center border border-[#D8D9DA] gap-2 p-2 px-4 font-extrabold text-[13px] rounded-3xl cursor-pointer shadow-[0_0_6px_rgba(0,0,0,0.1)] ' + (activeBtn === filters.filterName ? "bg-[#3E4152] text-white" : "")}>
                                    {filters.filterName}
                                </div>
                            ))}
                        </div>
                        <div className='bg-[#F2F3F5] mt-2'>
                            {sameDish ?
                                (<DishesWuthSemRastaurant sameDish={sameDish} sameDishWithRast={sameDishWithRast} />)
                                :

                                (<div className='w-full bg-[#F2F3F5] p-3 md:grid md:grid-cols-2 gap-3 items-start px-8 pb-8'>
                                    {activeBtn === "Dishes" ?
                                        (
                                            dishes?.map(({ card: { card } }, i) => (
                                                <div key={i}
                                                    className='my-2 shrink-0'>
                                                    <DishesCards data={card} />
                                                </div>
                                            ))
                                        ) :
                                        rastaurantsData.map(({ card: { card } }, i) => (
                                            <div key={i}
                                                className='shrink-0'>
                                                <RasturantCards data={card} />
                                            </div>
                                        ))}
                                </div>)}
                        </div></>)}
            </>)}
        </div>
    )
}









export default Search
