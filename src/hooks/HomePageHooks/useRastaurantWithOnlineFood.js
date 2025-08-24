import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setFilterVal } from "../../Utils/filterSlice";

const useRastaurantWithOnlineFood = () => {
  const [activeBtn, setActiveBtn] = useState(null);

  const dispatch = useDispatch();

  const filterOptions = [
    {
      filterName: "Fast Delivery",
      btnId: 1,
    },
    {
      filterName: "New on Swiggy",
      btnId: 2,
    },
    {
      filterName: "Ratings 4.0+",
      btnId: 3,
    },
    {
      filterName: "Pure Veg",
      btnId: 4,
    },
    {
      filterName: "Offers",
      btnId: 5,
    },
    {
      filterName: "Rs. 300-Rs. 600",
      btnId: 6,
    },
    {
      filterName: "Less than Rs. 300",
      btnId: 7,
    },
  ];

  function handleFilterBtn(filterName) {
    // console.log("button no. " + id)
    setActiveBtn(activeBtn === filterName ? null : filterName);
    // if()
  }

  useEffect(() => {
    dispatch(setFilterVal(activeBtn));
  }, [activeBtn, dispatch]);

  // function Filter4Reting(data) {
  //     data.filter((items) => {
  //         if (items.info.avgRating >= 4.0) {
  //             return items;
  //         }
  //     })
  // }

  return [activeBtn, handleFilterBtn, filterOptions];
};

export default useRastaurantWithOnlineFood;
