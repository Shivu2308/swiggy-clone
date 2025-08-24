import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetSameRastaurantDetail } from "../../Utils/toggleSlice";

const useSearch = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [dishes, setDishes] = useState([]);
  const [rastaurantsData, setRastaurantsData] = useState([]);
  const [activeBtn, setActiveBtn] = useState("Dishes");
  const [sameDish, setSameDish] = useState(null);
  const [sameDishWithRast, setSameDishWithRast] = useState({});
  const [loading, setLoading] = useState(false);

  const { lat, lng } = useSelector((state) => state.cordinatesSlice.cordinates);

  const { isSameDishWithSameRast, city, resLocation, resId, itemId } = useSelector((state) => state.toggleSlice.sameDishRastPage);

  // console.log(isSameDishWithSameRast, city, resLocation, resId, itemId)

  const dispatch = useDispatch();

  const filterOptions = [
    {
      filterName: "Rastaurant",
      btnId: 1,
    },
    {
      filterName: "Dishes",
      btnId: 2,
    },
  ];

  function handleFilterBtn(filterName) {
    // console.log("button no. " + id)
    setActiveBtn(activeBtn === filterName ? activeBtn : filterName);
    // if()
  }

  async function fetchDishes() {
    setLoading(true);
    let data = await fetch(
      `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=ed4c626f-9438-e0fc-5f18-c07f78b82f12&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22btrmbvwdfin5wp4dw1v7%22%2C%22dishFamilyId%22%3A%22846516%22%2C%22dishFamilyIds%22%3A%5B%22846516%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D`
    );
    let res = await data.json();
    // console.log((res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards).filter((data) => data.card?.card?.info))
    let dishesData =
      res?.data?.cards[1]?.groupedCard?.cardGroupMap?.DISH?.cards?.filter(
        (data) => data.card?.card?.info
      );
    setDishes(dishesData);
    setLoading(false);
  }

  async function fetchRestaurants() {
    let data = await fetch(
      `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=SUGGESTION&queryUniqueId=ed4c626f-9438-e0fc-5f18-c07f78b82f12&metaData=%7B%22type%22%3A%22DISH%22%2C%22data%22%3A%7B%22vegIdentifier%22%3A%22NA%22%2C%22cloudinaryId%22%3A%22btrmbvwdfin5wp4dw1v7%22%2C%22dishFamilyId%22%3A%22846516%22%2C%22dishFamilyIds%22%3A%5B%22846516%22%5D%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Dish%22%7D&selectedPLTab=RESTAURANT`
    );
    let res = await data.json();
    // console.log((res?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards).filter((data) => data.card?.card?.info))
    let rastaurantsData =
      res?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.filter(
        (data) => data.card?.card?.info
      );
    setRastaurantsData(rastaurantsData);
  }

  async function FetchSameDishRastPage() {
    let pathName = `/city/${city}/${resLocation}`;
    let encodedPath = encodeURIComponent(pathName);

    let data = await fetch(
      `${import.meta.env.VITE_BASE_URL}/restaurants/search/v3?lat=${lat}&lng=${lng}&str=${searchQuery}&trackingId=undefined&submitAction=ENTER&selectedPLTab=dish-add&restaurantMenuUrl=${encodedPath}-rest${resId}%3Fquery%3D${searchQuery}&restaurantIdOfAddedItem=${resId}&itemAdded=${itemId}`
    );
    let res = await data.json();
    // console.log(res?.data?.cards[1]?.card?.card)
    setSameDish(res?.data?.cards[1]?.card?.card);
    // console.log(res?.data?.cards[2]?.card?.card?.cards)
    setSameDishWithRast(res?.data?.cards[2]?.card?.card?.cards);
  }

  useEffect(() => {
    if (isSameDishWithSameRast) {
      FetchSameDishRastPage();
      setSearchQuery("");
    }
  }, [isSameDishWithSameRast]);

  useEffect(() => {
    if (searchQuery === "") {
      return;
    }
    fetchDishes();
    fetchRestaurants();
    dispatch(resetSameRastaurantDetail());
  }, [searchQuery]);

  function handleSearchQuery(e) {
    let query = e.target.value;
    // console.log(e.keyCode)
    if (e.keyCode === 13) {
      setSearchQuery(query);
      setSameDish(null);
      setDishes([]);
    }
  }

  return [dishes, rastaurantsData, sameDish, sameDishWithRast, activeBtn, loading, filterOptions, handleFilterBtn, handleSearchQuery];
};

export default useSearch;
