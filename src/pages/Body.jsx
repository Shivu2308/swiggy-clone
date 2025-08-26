import { useContext, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import OnYourMind from '../components/HomeComponents/OnYourMind';
import TopRestaurantChain from '../components/HomeComponents/TopRestaurantChain';
import RastaurantWithOnlineFood from '../components/HomeComponents/RastaurantWithOnlineFood';
import useRestaurantData from '../hooks/HomePageHooks/useRestaurantData';
import Shimmer from '../components/Shimmer';
import Footer from '../components/Footer';


const Body = () => {

    const [unserviceable, filterVal, onyourMindTitle, onyourMind, topRestaurantData, topRestaurantTitle, restaurantsWithOnlineFoodTitle, appLink, loading] = useRestaurantData()



    const filteredData = topRestaurantData.filter((items) => {
        if (!filterVal) return true;

        switch (filterVal) {
            case "Fast Delivery":
                return items;
            case "New on Swiggy":
                return items;
            case "Ratings 4.0+":
                return items?.info?.avgRating >= 4;
            case "Pure Veg":
                return items?.info?.veg === true;
            case "Offers":
                return (
                    items?.info?.aggregatedDiscountInfoV3?.header &&
                    items?.info?.aggregatedDiscountInfoV3?.header
                );
            case "Rs. 300-Rs. 600":
                return (
                    items?.info?.costForTwo?.slice(1, 4) >= "300" &&
                    items?.info?.costForTwo?.slice(1, 4) <= "600"
                );
            case "Less than Rs. 300":
                return items?.info?.costForTwo?.slice(1, 4) <= "300";
            default:
                return true;
        }
    });


    if (unserviceable) {
        return (
            <div className='w-full'>
                <div className='flex items-center flex-col mx-auto mt-20 w-96'>
                    <div className='w-60'>
                        <img className='w-full' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_476,h_476/portal/m/location_unserviceable.png" alt="unserviceable.png" />
                    </div>
                    <div className='font-extrabold text-lg mt-10'>Location Unserviceable</div>
                    <div className='text-center mt-5 opacity-80'>We don’t have any services here till now. Try changing location.</div>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="w-full">
                {
                    loading ?
                        (<Shimmer />)
                        :
                        (<div className='w-[95%] sm:w-[90%] lg:w-[80%] mx-auto '>
                            {onyourMind?.length ? (<>
                                <OnYourMind data={onyourMind} title={onyourMindTitle} />
                                <TopRestaurantChain data={topRestaurantData} title={topRestaurantTitle} />
                            </>) : ""}
                            <RastaurantWithOnlineFood title={restaurantsWithOnlineFoodTitle} data={filterVal ? filteredData : topRestaurantData} />
                        </div>)
                }

            </div>
            <Footer appLink={appLink}/>
        </>
    );
};

export default Body;
