import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets';
import useScroller from '../../hooks/utilsHooks/useScroller';
import useOnYourMind from '../../hooks/HomePageHooks/useOnYourMind';

const OnYourMind = ({ data, title }) => {

    
 
    const [ itemWidth ] = useOnYourMind()
    const [value, canScrollLeft, canScrollRight, containerRef, handlePrev, handleNext] = useScroller({ data, itemWidth })

    return (
        <>
            <div className="overflow-hidden">
                <div className="flex justify-between items-center m-4">
                    <h1 className="text-base sm:text-lg tracking-tighter font-extrabold">{title}</h1>
                    <div className="flex gap-5">

                        <div
                            onClick={canScrollLeft ? handlePrev : null}
                            className={`h-6 w-6 sm:h-8 sm:w-8 bg-slate-200 rounded-full flex justify-center items-center transition
                            ${canScrollLeft ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <img className="h-4 w-4 sm:h-5 sm:w-5" src={assets.leftarrow} alt="Left" />
                        </div>


                        <div
                            onClick={canScrollRight ? handleNext : null}
                            className={`h-6 w-6 sm:h-8 sm:w-8 bg-slate-200 rounded-full flex justify-center items-center transition
                            ${canScrollRight ? 'cursor-pointer' : 'opacity-50 cursor-not-allowed'}`}
                        >
                            <img className="h-4 w-4 sm:h-5 sm:w-5" src={assets.rightarrow} alt="Right" />
                        </div>
                    </div>
                </div>


                <div
                    style={{ transform: `translateX(-${value}%)` }}
                    ref={containerRef}
                    className="flex gap-4 md:mx-8 md:gap-6 transition duration-300 ease-in-out"
                >
                    {data.map((item) => (
                        <img
                            key={item.id}
                            className="w-24 md:w-36 rounded-xl shrink-0 cursor-pointer"
                            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/${item.imageId}`}
                            alt=""
                        />
                    ))}
                </div>
                <hr className='mt-12' />
            </div>
        </>
    )
}

export default OnYourMind;
