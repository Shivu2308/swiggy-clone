import React from 'react'
import useCategories from '../../hooks/RestaurantManuDataHooks/useCategories';
import { assets } from '../../assets/assets';
import ItemCards from './ItemCards';

const Categories = ({ categories, resInfo }) => {

    const [ openMenus, toggalManu ] = useCategories()



  return (
    <>
      {categories?.map(({ title, categoryId, itemCards }, i) => (
        <div key={categoryId}>
          <div
            onClick={() => toggalManu(categoryId)}
            className='py-5 flex items-center justify-between cursor-pointer'>
            <div className='font-bold text-sm opacity-80'>{title} ({itemCards.length})</div>
            <span className='cursor-pointer'><img src={openMenus.includes(categoryId) ? assets.arrowUp : assets.arrowDown} alt="" /></span>
          </div>
          <hr
            className={`h-[2px] bg-[#d3d3d3] transition-all duration-300 ease-in-out
           ${i === categories.length - 1
                ? openMenus.includes(categoryId)
                  ? 'w-[20%] opacity-100'
                  : 'w-full opacity-0 duration-0'
                : openMenus.includes(categoryId)
                  ? 'w-[20%]'
                  : 'w-full'
              }`}
          />
          {openMenus.includes(categoryId) && itemCards && (<div>
            {itemCards?.map(({ card: { info } }, i) => (
              <div key={i}>
                <ItemCards info={info} resInfo={resInfo} />
              </div>
            ))}</div>)
          }
        </div>
      ))}
    </>
  )
}

export default Categories
