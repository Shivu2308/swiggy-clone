import React, { useContext, useEffect, useRef, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast'
import { clearCartData } from '../Utils/cartSlice'
import useRestaurantManuData from '../hooks/RestaurantManuDataHooks/useRestaurantManuData'
import { MenuShimmer } from '../components/Shimmer'
import AddToCartBtn from '../components/AddToCartBtn'
import DealsForYou from '../components/RastaurantManuPage/DealsForYou'
import TopPics from '../components/RastaurantManuPage/TopPics'
import MenuData from '../components/RastaurantManuPage/MenuData'
import Footer from '../components/RastaurantManuPage/Footer'
import ChackCartBar from '../components/RastaurantManuPage/ChackCartBar'

const RastaurantManu = () => {

  const [ navTitle, resInfo, deals, topPics, menuData, footerData,] = useRestaurantManuData()


  if (menuData.length === 0) {
    return (
      <>
        <MenuShimmer />
      </>
    )
  }

  return (

    <div className=' w-[52vw] h-full mx-auto relative'>
      <div className='text-[10px] font-semibold flex gap-2 mt-7'>
        <span className='text-[#777] hover:text-[#000] cursor-pointer'><Link to={"/"}>Home</Link></span> /
        <span className='text-[#777] hover:text-[#000] cursor-pointer'> {resInfo?.city} </span>/
        <span className='text-[#000]'>{navTitle}</span>
      </div>
      <div className='w-full'>
        <h1 className='font-extrabold text-2xl mt-10 ml-3'>{resInfo.name}</h1>
      </div>
      <div className='w-full mt-3 bg-gradient-to-t from-[#DFDFE7] to-white rounded-t-none rounded-[44px] flex justify-center items-center'>
        <div className='bg-white w-full m-5 border border-solid border-[#C0C0C0] border-opacity-80 rounded-3xl'>
          <div className='mx-4 my-3'>
            <div className='flex gap-1 my-2 mt-5 font-semibold'>
              <span><img src={assets.reting} alt="" /></span>
              <span className='opacity-80'>{resInfo?.avgRating}({resInfo?.totalRatingsString}) • </span>
              <span className='opacity-80'>{resInfo?.costForTwoMessage}</span>
            </div>
            <div className='text-[13px] text-red-500 font-extrabold underline'>{(resInfo.cuisines)?.join(", ")}</div>
            <div className='relative flex gap-3 mt-2'>
              <div className='relative bg-[#C0C0C0] w-[2px] mt-2 h-9'>
                <div className='absolute w-[6px] h-[6px] bg-[#C0C0C0] rounded-full top-0 -left-[2px]'></div><div></div>
                <div className='absolute w-[6px] h-[6px] bg-[#C0C0C0] rounded-full bottom-0 -left-[2px]'></div>
              </div>
              <div>
                <div className='flex gap-3 items-center'><span className='text-[14px] font-bold text-[#000]'>Outlate</span> <span className='text-sm font-normal opacity-70'>{resInfo?.areaName}</span></div>
                <div className='text-[14px] font-bold text-[#000] mt-2'>{resInfo?.sla?.slaString}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <DealsForYou deals={deals} />
      <div>
        <div className='font-bold text-xs opacity-60 text-center mt-12'>M E N U</div>
        <div className='bg-[rgba(2,6,12,0.0509803922)] font-bold opacity-60 text-center mx-3 mt-6 p-3 rounded-xl relative cursor-pointer'>Search for dishes <span className='absolute right-4 mt-1'><img src={assets.search} alt="" /></span></div>
      </div>
      <hr className='h-[2px] bg-[#f1f1f6] my-5 mx-2' />
      {topPics && <TopPics topPics={topPics} resInfo={resInfo} />}
      <MenuData menuData={menuData} resInfo={resInfo} />
      <Footer footerData={footerData} />
      <ChackCartBar />
    </div>
  )
}

export default RastaurantManu
