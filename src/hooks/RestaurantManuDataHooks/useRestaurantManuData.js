import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useRestaurantManuData = () => {
  const [navTitle, setNavTitle] = useState("");
  const [resInfo, setResInfo] = useState(null);
  const [deals, setDeals] = useState(null);
  const [topPics, setTopPics] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState([]);

  // const { cordinates: { lat, lng } } = useContext(Cordinates)
  const { lat, lng } = useSelector((state) => state.cordinatesSlice.cordinates);
  // console.log(lat, lng)

  let { id } = useParams();
  // console.log(id.split("rest").at(-1));
  let mainId = id.split("rest").at(-1);
  // console.log(mainId);
  

  async function fetchMenu() {
    const [data1, data2] = await Promise.all([
      fetch(`/allMockData/allRestaurantManuData1.json`),
      fetch(`/allMockData/allRestaurantManuData2.json`)
    ]);

    if (!data1.ok || !data2.ok) {
      throw new Error("One or both API files failed to load");
    }

    const res1 = await data1.json();
    // console.log("res1 = ",res1);
    
    const res2 = await data2.json();
    // console.log("res2 = ",res2);
    

    let response = [...res1, ...res2];

    // console.log("res1+res2 =",response);
    
    const res = response?.find(rast =>rast?.data?.cards?.find(idCard => idCard?.card?.card?.info?.id  === mainId || idCard?.card?.card?.info?.sla?.restaurantId === mainId))
    // console.log(response?.find(rast =>rast?.data?.cards?.find(idCard => idCard?.card?.card?.info?.id === mainId || idCard?.card?.card?.info?.sla?.restaurantId === mainId)));
    // console.log(response?.find(rast =>rast?.data?.cards?.find(idCard => idCard?.card?.card?.info?.id === mainId || idCard?.card?.card?.info?.sla?.restaurantId === mainId)));

    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes("v2.TextBoxV2"))?.card?.card?.text);
    const nav_title = res?.data?.cards?.find((data) =>
      data.card.card?.["@type"].includes("v2.TextBoxV2")
    )?.card?.card?.text;
    setNavTitle(nav_title);
    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes(".food.v2.Restaurant"))?.card?.card?.info);
    const res_Info = res?.data?.cards?.find((data) =>
      data.card.card?.["@type"].includes(".food.v2.Restaurant")
    )?.card?.card?.info;
    setResInfo(res_Info);

    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes("v2.GridWidget"))?.card?.card?.gridElements?.infoWithStyle?.offers);
    const offers = res?.data?.cards?.find((data) =>
      data.card.card?.["@type"].includes("v2.GridWidget")
    )?.card?.card?.gridElements?.infoWithStyle?.offers;
    setDeals(offers);

    let picsTopDis = res?.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (data) => data?.card?.card?.title === "Top Picks"
      );

    setTopPics(picsTopDis);
    let actualMenu = res?.data?.cards
      .find((data) => data?.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (items) => items?.card?.card?.itemCards || items?.card?.card?.categories
      );
    // console.log(actualMenu);
    setMenuData(actualMenu);

    // console.log(res?.data?.cards.find(data => data.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) => items?.card?.card?.completeAddress));
    let footerData1 = res?.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (items) => items?.card?.card?.imageId
      )?.card?.card;
    let footerData2 = res?.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (items) => items?.card?.card?.completeAddress
      )?.card?.card;
    // console.log({...footerData1, ...footerData2})
    setFooterData({ ...footerData1, ...footerData2 });
  }

  useEffect(() => {
    fetchMenu();
  }, []);

  return [navTitle, resInfo, deals, topPics, menuData, footerData];
};

export default useRestaurantManuData;
