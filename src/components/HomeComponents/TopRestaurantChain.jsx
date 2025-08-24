import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets';
import RasturantCard from './RasturantCard';
import useScroller from '../../hooks/utilsHooks/useScroller';

const TopRestaurantChain = ({ data, title }) => {
    // const [data, setData] = useState([])
    // const [title, setTitle] = useState('')

    const itemWidth = 306; // Approximate width of one image + gap
    const [value, canScrollLeft, canScrollRight, containerRef, handlePrev, handleNext] = useScroller({ data, itemWidth })



    return (
        <>
            <div className='overflow-hidden mt-8'>
                <div className="flex justify-between items-center m-4">
                    <h1 className="text-lg font-extrabold">{title}</h1>
                    <div className="flex gap-5">
                        <div
                            onClick={canScrollLeft ? handlePrev : null}
                            className={`h-8 w-8 bg-slate-200 rounded-full flex justify-center items-center transition
                            ${canScrollLeft ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <img className="w-5 h-5" src={assets.leftArrow} alt="Left" />
                        </div>


                        <div
                            onClick={canScrollRight ? handleNext : null}
                            className={`h-8 w-8 bg-slate-200 rounded-full flex justify-center items-center transition
                                ${canScrollRight ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <img className="w-5 h-5" src={assets.rightArrow} alt="Right" />
                        </div>
                    </div>
                </div>
                <div
                    style={{ transform: `translateX(-${value}%)` }}
                    ref={containerRef}
                    className="flex gap-8 px-4 transition duration-300 ease-in-out"
                >
                    {data?.map(({ info, cta: { link } }) => (

                        <div key={info.id} className='w-[274px] rounded-xl hover:scale-90 duration-100 cursor-pointer'>
                            <RasturantCard {...info} link={link} />
                        </div>
                    ))}
                </div>
            </div>
            <hr className='mt-8' />
        </>
    )
}

export default TopRestaurantChain;
