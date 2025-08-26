import React, { useEffect, useState } from "react";

const useTopPics = ({carousel}) => {
  const [data, setData] = useState([]);

  // console.log(carousel);
  

  useEffect(() => {
    setData(carousel || []);
  });
  return [data];
};

export default useTopPics;
