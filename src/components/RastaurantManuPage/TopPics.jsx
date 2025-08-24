import React from 'react'
import useScroller from '../../hooks/utilsHooks/useScroller';
import { assets } from '../../assets/assets';
import useTopPics from '../../hooks/RestaurantManuDataHooks/useTopPics';

const TopPics = ({ topPics, resInfo }) => {
    // console.log(topPics);
    const { card: { card: { title, carousel } } } = topPics
    // console.log(title);
    const [data] = useTopPics({carousel})



    const itemWidth = 312; // Approximate width of one image + gap
    const [value, canScrollLeft,  canScrollRight, containerRef, handlePrev, handleNext] = useScroller( { data, itemWidth })



  


    return (
        <div className='overflow-hidden mx-4'>
            <div className="flex justify-between items-center my-4">
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
                className='flex items-center gap-5 transition duration-300 ease-in-out'>
                {
                    data.map(({ bannerId, creativeId, dish: { info: { price, defaultPrice, isVeg } } }) => (

                        <div key={bannerId} className='flex-shrink-0 w-[292px] h-[300px] relative'>
                            {/* {console.log(item)} */}
                            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/${creativeId}`} alt="" />
                            <div className='absolute bottom-3 z-10 flex justify-between items-center w-full px-4'>
                                <div className='font-bold text-sm text-[#ffffff]'>₹{defaultPrice / 100 || price / 100}</div>
                                <div className='flex flex-col text-center'>
                                    <button className='bg-[#ffffff] font-extrabold shadow-lg text-base text-[rgb(27,166,114)] px-10 py-2 border rounded-lg hover:bg-[rgba(189,191,194,0.99)] duration-200'>ADD</button>
                                    <span className='font-semibold text-xs text-white opacity-70'>Customisable</span>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='h-4 w-full bg-[#f1f1f6] mt-8'></div>
        </div>
    )
}

export default TopPics
