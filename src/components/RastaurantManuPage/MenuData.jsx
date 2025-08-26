import React from 'react'
import useMenuData from '../../hooks/RestaurantManuDataHooks/useMenuData'
import { assets } from '../../assets/assets'
import Categories from './Categories'
import ItemCards from './ItemCards'

const MenuData = ({ menuData, resInfo }) => {

    const [ openMenus, toggalManu ] = useMenuData({ menuData})
  return (
    <>
      {menuData.map(({ card: { card: { itemCards, categories, title, categoryId, } } }, i) => (
        <div key={categoryId}>
          <div className='px-5'>
            {/* {console.log(itemCards)} */}
            <div
              onClick={() => toggalManu(categoryId)}
              className='flex justify-between items-center py-5 cursor-pointer'>
              <h1 className='font-extrabold text-base'>{title} ({itemCards ? (itemCards).length : (categories).length})</h1>
              {itemCards ? (<span
                className=''>
                <img src={openMenus.includes(categoryId) ? assets.arrowup : assets.arrowdown} alt="" />
              </span>) : null}

            </div>
            {openMenus.includes(categoryId) && itemCards ? (<div>

              {itemCards?.map(({ card: { info } }, i) => (
                <div key={i}>
                  <ItemCards info={info} resInfo={resInfo} />
                  {i < itemCards.length - 1 && (
                    <hr className='h-[2px] bg-[#f1f1f6]' />
                  )}
                </div>
              ))}</div>) : (
              <div>
                <Categories categories={categories} resInfo={resInfo} />
              </div>
            )}

          </div>
          {i < menuData.length - 1 && (
            <div className='h-4 w-full bg-[#f1f1f6]'></div>
          )}

        </div>
      ))}
    </>
  )
}

export default MenuData
