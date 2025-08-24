import { useEffect, useRef, useState } from "react";

const useOnYourMind = () => {
  // const [data, setData] = useState([]);





  // // Fetch Data
  // async function fetchData() {
  //     try {
  //         const res = await fetch(
  //             "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  //         );
  //         const result = await res.json();
  //         const fetchedData = result?.data?.cards[0]?.card?.card?.imageGridCards?.info || [];
  //         setData(fetchedData);
  //     } catch (err) {
  //         console.error("Failed to fetch Swiggy data:", err);
  //     }
  // }

  // useEffect(() => {
  //     fetchData();
  // }, []);


  return [, canScrollLeft, canScrollRight ];
};

export default useOnYourMind;
