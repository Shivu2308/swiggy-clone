import React, { useEffect, useState } from 'react'

const useMenuData = ({ menuData}) => {

    
  const [openMenus, setOpenMenus] = useState([]);

  // Open all menu IDs when data is loaded // load all id on openmanu for open it
  useEffect(() => {
    if (menuData?.length) {
      const allIds = menuData.map(
        ({ card: { card: { categoryId } } }) => categoryId
      );
      setOpenMenus(allIds);
    }
  }, [menuData]); // runs when menuData is received

  // console.log(menuData);



  function toggalManu(id) {

    setOpenMenus(prev =>
      prev.includes(id)                         // chack click elemenr id match or not
        ? prev.filter(item => item !== id) //  if match so remove it to close
        : [...prev, id] // if not match do add it add to open
    )
  }


  return [openMenus, toggalManu]
}

export default useMenuData
