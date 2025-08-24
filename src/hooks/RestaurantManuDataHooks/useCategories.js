import React, { useState } from "react";

const useCategories = () => {
  const [openMenus, setOpenMenus] = useState([]);

  function toggalManu(id) {
    // console.log(id);
    setOpenMenus((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  return [openMenus, toggalManu];
};

export default useCategories;
