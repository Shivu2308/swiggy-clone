import React from 'react'
import useScroller from '../../hooks/utilsHooks/useScroller';
import { assets } from '../../assets/assets';

const DealsForYou = ({ deals }) => {

    const itemWidth = 340; // Approximate width of one image + gap
    const [value, canScrollLeft,  canScrollRight, containerRef, handlePrev, handleNext] = useScroller( { data: deals, itemWidth })
    

    return (
        <div className='overflow-hidden mx-4'>
            <div className="flex justify-between items-center my-4">
                <h1 className="text-lg font-extrabold">Deals for you</h1>
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
                    deals.map((item) => (
                        <div key={item?.info?.offerIds[0]} className='cursor-pointer border-[1px] flex items-center gap-5 border-[#C0C0C0] w-80 p-2 rounded-2xl flex-shrink-0'>
                            <div className='w-[52px]'>
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_96,h_96/${item?.info?.offerLogo}`} alt="" />
                            </div>
                            <div>

                                <div className='text-base font-extrabold'>{item?.info?.header}</div>
                                <div className='text-sm font-bold text-[#888]'>{item?.info?.primaryDescription ? item?.info?.primaryDescription : item?.info?.description}</div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}

export default DealsForYou
