import React, { useEffect, useState } from "react";

const useTopRestaurantChain = () => {
  const widths = {
    base: { class: "w-[170px]", px: 202 },
    lg: { class: "lg:w-[274px]", px: 306 },
  };

  // responsive itemWidth (resize pe update hota rahega)
  const [itemWidth, setItemWidth] = useState(widths.base.px);

  useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth >= 1024) {
        setItemWidth(widths.lg.px);
      } else {
        setItemWidth(widths.base.px);
      }
    };

    updateWidth(); // initial call
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return [itemWidth];
};

export default useTopRestaurantChain;
