import React, { useEffect, useRef, useState } from 'react'
import { assets } from '../../assets/assets';
import useScroller from '../../hooks/utilsHooks/useScroller';

const OnYourMind = ({ data, title }) => {
    
    // const [  ] = useOnYourMind()
    const itemWidth = 150; // Approximate width of one image + gap
    const [ value, canScrollLeft, canScrollRight,  containerRef, handlePrev, handleNext ] = useScroller({ data, itemWidth })

    return (
        <>
            <div className="overflow-hidden">
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
                    className="flex gap-6 px-1 mx-8 transition duration-300 ease-in-out"
                >
                    {data.map((item) => (
                        <img
                            key={item.id}
                            className="w-36 rounded-xl cursor-pointer"
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
