import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, Outlet } from 'react-router-dom'
import { CartContext, Cordinates, Visibility } from '../context/contextApi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearchBar, toggleLoginBar } from '../Utils/toggleSlice'
import { setCordinates } from '../Utils/cordinatesSlice'
import useNavbar from '../hooks/HomePageHooks/useNavbar'
import SignInPage from '../pages/SignInPage'

const Navbar = () => {

  const [navItens, searchResult, adderss, cartData, userData, toggaleSearch, toggaleLogIn, handleLogin, fetchLatLng, searchFunc, toggleSearchCOntainer] = useNavbar()




  return (
    <>

      <div className={`h-full w-full  `}>
        <div
          onClick={toggleSearchCOntainer}
          className={`h-full w-full bg-[#050a13db] absolute z-40 opacity-80 ${toggaleSearch ? "visible" : "invisible"}`}>
        </div>
        {/* <div className={`w-[38%] h-full bg-white absolute z-40 top-0 `}> */}
        <div className={`w-4/5 sm:w-[38%] flex justify-end h-full bg-white absolute z-40 top-0 transition-all duration-300 ease-in-out ${toggaleSearch ? "left-0" : "-left-[80%] sm:-left-[38%]"}`}>
          <div className='w-4/5 sm:w-[62%] mx-auto sm:mr-12'>
            <div className='py-5'>
              <div className='mb-7'>
                <img className='cursor-pointer'
                  onClick={toggleSearchCOntainer}
                  src={assets.cancle} alt="" />
              </div>

              <div>
                <input
                  onChange={(e) => searchFunc(e.target.value)}
                  className='border caret-orange-500 h-[52px] w-full px-5 focus:outline-none focus:shadow-lg' type="text" placeholder='Search for area, street name...' />
              </div>
            </div>


            <div className='cursor-pointer flex gap-3 group border p-4 mb-5'>
              <div className='h-5 w-5'><img className='w-full h-full' src={assets.gps} alt="" /></div>
              <div>
                <div className='font-bold group-hover:text-orange-600'>Get current location</div>
                <div className='text-xs font-semibold opacity-50'>Using GPS</div>
              </div>
            </div>

            <div className=''>
              {searchResult?.map((data, i) => (
                <div key={i}
                  onClick={() => fetchLatLng(data.place_id)}
                  className='flex gap-3 pl-4'>
                  {/* {console.log(data) */}
                  <div className='w-5 h-5 mt-1 flex-shrink-0'>
                    <img className=' w-full h-full' src={assets.locationSvg} alt="" />
                  </div>
                  <div className='w-full'>
                    <div className='font-bold'>{data.structured_formatting.main_text}</div>
                    <div className='text-xs font-medium mt-1 opacity-60'>{data.structured_formatting.secondary_text}</div>
                    {searchResult.length - 1 > i &&
                      <div className="border-t border-dashed border-gray-400 my-5"></div>
                    }
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className='h-full'>
        <div
          onClick={handleLogin}
          className={`h-full w-full bg-[#050a13db] absolute z-40 opacity-80 ${toggaleLogIn ? "visible" : "invisible"}`}>
        </div>
        <div className={`w-4/5 sm:w-[38%] flex justify-start h-full bg-white fixed z-40 top-0 transition-all duration-300 ease-in-out ${toggaleLogIn ? ' right-0' : 'right-[-80%] sm:-right-[38%]'}`}>
         <SignInPage />
        </div>
      </div>




      <div className='relative'>
        <div className='w-full shadow-md h-20 flex justify-between items-center  px-5 sm:px-20 lg:px-28 xl:px-40'>
          <div className='flex gap-4 sm-gap-6 md:gap-12 justify-center items-center'>
            <Link to={"/"} ><div className='rounded-xl hover:scale-[1.1] duration-100 w-10 h-10 sm:w-12 sm:h-12 overflow-hidden cursor-pointer'><img className='h-full w-full object-cover' src={assets.swiggyIcon} alt="" /></div></Link>
            <div
              onClick={toggleSearchCOntainer}
              className='flex justify-center items-center cursor-pointer group'>
              <span className='font-bold text-sm group-hover:text-orange-600 border-b-2 border-black group-hover:border-orange-600'>Other</span>
              {adderss && <span className='ml-2 text-sm max-w-48 break-words opacity-80 group-hover:opacity-50 line-clamp-1'>{adderss}</span>}
              <svg
                viewBox="0 0 24 24"
                className="h-6 fill-orange-600">
                <path d="M6.34317 7.75732L4.92896 9.17154L12 16.2426L19.0711 9.17157L17.6569 7.75735L12 13.4142L6.34317 7.75732Z" />
              </svg>
            </div>
          </div>
          <div>
            <nav>
              <ul className='flex justify-center items-center gap-6 md:gap-12'>
                {navItens.map((items) => (
                  items?.name === "Sign In" ?

                    <div
                      onClick={handleLogin}
                      to={items.path} key={items.id}>
                      <li className='text-base font-[550] hover:cursor-pointer hover:text-orange-600 flex items-center justify-between gap-2'>
                        <div className={`${userData ? "w-7 h-7 rounded-full overflow-hidden" : "w-[18px] h-[18px]"}`}>
                          {userData ? <img className='h-full w-full ' src={userData.photoURL} alt="" /> : <img className='w-[18px] h-[18px]' src={items.src} alt="" />}
                          <div className='absolute bottom-[-2px] left-[5px] text-sm font-semibold'>{items.name === "Cart" ? cartData.length : ""}</div>
                        </div>
                        {userData ? <span className='hidden md:block md:w-20 truncate'>{userData.name}</span> : <span className='hidden md:block truncate'>{items.name}</span>}
                      </li>
                    </div>

                    :

                    <Link to={items.path} key={items.id}>
                      <li className='text-base font-[550] hover:cursor-pointer hover:text-orange-600 flex items-center justify-between gap-2'>
                        <div className='h-[18px] w-[18px] relative'>
                          <img className='w-[18px] h-[18px]' src={items.src} alt="" />
                          <div className='absolute bottom-[-2px] left-[5px] text-sm font-semibold'>{items.name === "Cart" ? cartData.length : ""}</div>
                        </div>
                        <span className='hidden md:block truncate'>{items.name}</span>
                      </li>
                    </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
        <Outlet />
      </div>

    </>
  )
}

export default Navbar
