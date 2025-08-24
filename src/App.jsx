
import Navbar from './components/Navbar'
import Body from './pages/Body'
import RastaurantManu from './pages/RastaurantManu'
import { Route, Routes } from 'react-router-dom'
import { CartContext, Cordinates, Visibility } from './context/contextApi'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Search from './pages/Search'
import Cart from './pages/Cart'

function App() {

  // const [toggaleSearch, setToggaleSearch] = useState(false);
  const toggaleSearch = useSelector((state) => state.toggleSlice.searchToggle)
  const toggaleLogIn = useSelector((state) => state.toggleSlice.logInBarToggle)
  const toggleCard = useSelector((state) => state.cardDetailSlice.cardDetailToggle)

  // const [cordinates, setCordinates] = useState({ lat: 22.7195687, lng: 75.8577258 })

  // const [cartData, setCartData] = useState([])

  // function getDataFromLocalStorage() {
  //   let cart = JSON.parse(localStorage.getItem("cartData")) || []
  //   setCartData(cart)
  // }

  // useEffect(() => {
  //   getDataFromLocalStorage()
  // }, [])
  
  return (
    // <CartContext.Provider value={{ cartData, setCartData }}>
    //  <Cordinates.Provider value={{ cordinates, setCordinates }}>
    //    <Visibility.Provider value={{ toggaleSearch, setToggaleSearch }}>
          <div className={`${toggaleSearch || toggaleLogIn || toggleCard ? 'max-h-screen overflow-hidden' : "max-w-screen"}`}>
            <Routes>
              <Route path='/' element={<Navbar />}>
                <Route path='/' element={<Body />} />
                <Route path='/city/:city/:id' element={<RastaurantManu />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/Search' element={<Search />} />
                {/* <Route path='/signin' element={<SignInPage />} /> */}
                <Route path='/*' element={<h>comming soon....</h>} />
              </Route>
            </Routes>
          </div>
    //    </Visibility.Provider>
    //  </Cordinates.Provider>
    // </CartContext.Provider>
  )
}

export default App
