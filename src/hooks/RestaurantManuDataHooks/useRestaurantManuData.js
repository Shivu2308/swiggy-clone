import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const useRestaurantManuData = () => {
  const [navTitle, setNavTitle] = useState("");
  const [resInfo, setResInfo] = useState([]);
  const [deals, setDeals] = useState([]);
  const [topPics, setTopPics] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState([]);
  const [loading, setLoading] = useState(true);

  // const { cordinates: { lat, lng } } = useContext(Cordinates)
  const { lat, lng } = useSelector((state) => state.cordinatesSlice.cordinates);
  // console.log(lat, lng)

  let { id } = useParams();
  // console.log(id.split("rest").at(-1));
  let mainId = id.split("rest").at(-1);

  async function fetchMenu() {
    const data = await fetch(
      `${import.meta.env.VITE_BASE_URL}/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=${lat}&lng=${lng}&restaurantId=${mainId}&catalog_qa=undefined&submitAction=ENTER`
    );
    let res = await data.json();

    // console.log(res.data.cards);
    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes("v2.TextBoxV2"))?.card?.card?.text);
    const nav_title = res.data.cards.find((data) =>
      data.card.card?.["@type"].includes("v2.TextBoxV2")
    )?.card?.card?.text;
    setNavTitle(nav_title);
    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes(".food.v2.Restaurant"))?.card?.card?.info);
    const res_Info = res.data.cards.find((data) =>
      data.card.card?.["@type"].includes(".food.v2.Restaurant")
    )?.card?.card?.info;
    setResInfo(res_Info);

    // console.log(res.data.cards.find(data => data.card.card?.["@type"].includes("v2.GridWidget"))?.card?.card?.gridElements?.infoWithStyle?.offers);
    const offers = res.data.cards.find((data) =>
      data.card.card?.["@type"].includes("v2.GridWidget")
    )?.card?.card?.gridElements?.infoWithStyle?.offers;
    setDeals(offers);

    let picsTopDis = res.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (data) => data?.card?.card?.title === "Top Picks"
      );

    setTopPics(picsTopDis);
    let actualMenu = res.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (items) => items?.card?.card?.itemCards || items?.card?.card?.categories
      );
    // console.log(actualMenu);
    setMenuData(actualMenu);

    // console.log(res.data?.cards.find(data => data.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((items) => items?.card?.card?.completeAddress));
    let footerData1 = res.data?.cards
      .find((data) => data.groupedCard)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(
        (items) => items?.card?.card?.imageId
      )?.card?.card;
    let footerData2 = res.data?.cards
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

  return [navTitle, resInfo, deals, topPics, menuData, footerData, loading];
};

export default useRestaurantManuData;
