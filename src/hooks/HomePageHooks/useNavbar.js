import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { toggleLoginBar, toggleSearchBar } from "../../Utils/toggleSlice"
import { setCordinates } from "../../Utils/cordinatesSlice"
import { assets } from "../../assets/assets"

const useNavbar = () => {

  const [searchResult, setSearchResult] = useState([])
  // const { setCordinates } = useContext(Cordinates)
  const [adderss, setAdderss] = useState('')


  // const { cartData } = useContext(CartContext)
  const cartData = useSelector((state) => state.cartSlice.cartData)
  // console.log(cartData)

  const userData = useSelector((state)=> state.authSlice.userData)
    // const hello = useContext(Visibility)
    // console.log(hello);
    // const { toggaleSearch, setToggaleSearch } = useContext(Visibility)
    // access from redus store
    const toggaleSearch = useSelector((state) => state.toggleSlice.searchToggle)
    const toggaleLogIn = useSelector((state) => state.toggleSlice.logInBarToggle)
    // console.log(toggaleLogIn)
      const dispatch = useDispatch()

    const navItens = [
      {
        name: "Swiggy Corporate",
        src: assets.corporate,
        path: "/SwiggyCorporate",
        id: 1
      },
      {
        name: "Search",
        src: assets.search,
        path: "/Search",
        id: 2
      },
      {
        name: "Offers",
        src: assets.offers,
        path: "/Offers",
        id: 3
      },
      {
        name: "Help",
        src: assets.help,
        path: "/Help",
        id: 4
      },
      {
        name: "Sign In",
        src: assets.signIn,
        path: "/signin",
        id: 5
      },
      {
        name: 'Cart',
        src: assets.cart,
        path: "/Cart",
        id: 6
      },
    ]
  
  
    function toggleSearchCOntainer() {
      // console.log("clicked");
      // setToggaleSearch(prev => !prev)
      dispatch(toggleSearchBar())
      // console.log(toggaleSearch);
    }
  
    async function searchFunc(val) {
      // console.log(val);
      if (val === "") return;
      const data = await fetch(`${import.meta.env.VITE_BASE_URL}/misc/place-autocomplete?input=${val}`)
      const result = await data.json()
      // console.log(result.data);
      setSearchResult(result.data)
    }
  
    async function fetchLatLng(id) {
      if (id === "") return;
      toggleSearchCOntainer()
      const latLngApi = await fetch(`${import.meta.env.VITE_BASE_URL}/misc/address-recommend?place_id=${id}`)
      const result = await latLngApi.json()
  
      // console.log(result);
  
      setAdderss(result.data[0]?.formatted_address)
      const locationLat = result?.data[0]?.geometry?.location.lat
      const locationLng = result?.data[0]?.geometry?.location.lng
      dispatch(setCordinates({ locationLat, locationLng }))
      // setCordinates({
      //   lat: result?.data[0]?.geometry?.location.lat,
      //   lng: result?.data[0]?.geometry?.location.lng
      // })
  
  
      // console.log(result?.data[0]?.geometry?.location.lat)
      // console.log(result?.data[0]?.geometry?.location.lng)
  
    }
  
    function handleLogin() {
      dispatch(toggleLoginBar())
    }
  

    return [navItens, searchResult, adderss, cartData, userData, toggaleSearch, toggaleLogIn, handleLogin, fetchLatLng, searchFunc, toggleSearchCOntainer]
}

export default useNavbar
