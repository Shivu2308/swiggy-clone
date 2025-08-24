import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const useRestaurantData = () => {
  const [unserviceable, setUnserviceable] = useState();
  const [onyourMindTitle, setonyourMindTitle] = useState("");
  const [onyourMind, setonyourMind] = useState([]);
  const [topRestaurantData, setTopRestaurantData] = useState([]);
  const [topRestaurantTitle, setTopRestaurantTitle] = useState("");
  const [restaurantsWithOnlineFoodTitle, setRestaurantsWithOnlineFoodTitle] = useState("");

  // const { cordinates: { lat, lng } } = useContext(Cordinates)

  const { lat, lng } = useSelector((state) => state.cordinatesSlice.cordinates);
  // console.log(lat, lng);

      const filterVal = useSelector((state) => state.filterSlilce.filterVal);
    // console.log(filterVal)

  // Fetch Data
  async function fetchData() {
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BASE_URL}/restaurants/list/v5?lat=${lat}&lng=${lng}&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
      );
      const result = await res.json();

      // console.log(result?.data)
      setUnserviceable(
        result?.data?.communication?.swiggyNotPresent?.swiggyNotPresent
      );
      // const fetchedData = result?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
      // console.log(result?.data?.cards[0]?.card?.card?.header?.title);
      setonyourMindTitle(result?.data?.cards[0]?.card?.card?.header?.title);
      setonyourMind(result?.data?.cards[0]?.card?.card?.imageGridCards?.info);

      // console.log(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

      setTopRestaurantTitle(result?.data?.cards[1]?.card?.card?.header?.title);

      let top_Restaurant_Data = result?.data?.cards?.find((data) => data?.card?.card?.id === "top_brands_for_you")?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      let top_Restaurant_Data_1 = result?.data?.cards?.find((data) => data?.card?.card?.id === "restaurant_grid_listing")?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      let top_Restaurant_Data_2 = result?.data?.cards?.find((data) => data?.card?.card?.id === "restaurant_grid_listing_v2")?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setTopRestaurantData(top_Restaurant_Data || top_Restaurant_Data_1 || top_Restaurant_Data_2);

      // console.log(result?.data?.cards?.find(data => data?.card?.card?.id === 'popular_restaurants_title')?.card?.card.title)
      let restaurants_With_Online_Food_Title = result?.data?.cards?.find((data) => data?.card?.card?.id === "popular_restaurants_title")?.card?.card.title;
      setRestaurantsWithOnlineFoodTitle(restaurants_With_Online_Food_Title);
    } catch (err) {
      console.error("Failed to fetch Swiggy data:", err);
    }
  }

  

  useEffect(() => {
    fetchData();
  }, [lat, lng]);


  return [unserviceable, filterVal, onyourMindTitle, onyourMind, topRestaurantData, topRestaurantTitle, restaurantsWithOnlineFoodTitle]


};

export default useRestaurantData;
