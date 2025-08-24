import React, { useEffect, useState } from "react";

const useTopPics = ({carousel}) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(carousel || []);
  });
  return [data];
};

export default useTopPics;
