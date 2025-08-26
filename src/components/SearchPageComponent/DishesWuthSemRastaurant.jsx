import React from 'react'
import DishesCards from './DishesCards'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const DishesWuthSemRastaurant = ({ sameDish, sameDishWithRast }) => {
    // console.log(sameDish)
    // console.log(sameDishWithRast)
    const { isSameDishWithSameRast, city, resLocation, resId, itemId } = useSelector((state) => state.toggleSlice.sameDishRastPage);
    // console.log(isSameDishWithSameRast, city, resLocation, resId, itemId)
    return (
        <>
            <div className='bg-[#e2e2e2] p-5 my-2'>
                <p className='font-extrabold text-sm text-[#414449]'>Item added to cart</p>
            </div>
            <div className='w-full bg-[#F2F3F5] px-8 sm:p-3 md:grid md:grid-cols-2 gap-3 items-start mt-2 pb-8'>
                <DishesCards data={sameDish} />
            </div>
            <div>
                <p className='font-semibold text-[#414449] p-5'>
                    More dishes from this restaurant
                </p>
            </div>
            <div className='w-full bg-[#F2F3F5] px-8 sm:p-3 md:grid md:grid-cols-2 gap-3 items-start mt-2 pb-8'>
                {sameDishWithRast?.map((cards) => (
                    <div key={cards.card.info.id}
                        className='my-2'>
                        <DishesCards data={{ ...cards.card, restaurant: sameDish.restaurant }} />
                    </div>
                ))}
                {/* <DishesCards data={sameDishWithRast} /> */}
            </div>
            <div className='w-full bg-white py-3'>
                <Link to={`/city/${city}/${resLocation}-${"rest" + resId}`}>
                    <div className='border border-[#FF5200] text-[#FF5200] text-center font-bold py-3 mx-2 my-3 cursor-pointer'>
                        See full menu
                    </div>
                </Link>
            </div>
            <div className='bg-[#F2F3F5] pb-20'>
                <div className='text-[#5D8EDB] bg-[#eeeeee] py-14 text-sm text-center font-bold cursor-pointer'>
                    BACK TO SEARCH RESULTS
                </div>
            </div>
        </>
    )
}

export default DishesWuthSemRastaurant
