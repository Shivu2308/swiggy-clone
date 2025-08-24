import { useEffect, useRef, useState } from "react";

const useScroller = ({ data, itemWidth }) => {
  const [value, setValue] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const containerRef = useRef();

  // Update scroll button state
  function updateScrollButtons(newValue) {
    const containerWidth = containerRef.current.offsetWidth;
    const totalWidth = data.length * itemWidth;
    const maxTranslate = totalWidth - containerWidth;

    setCanScrollLeft(newValue > 0);
    const scrolled = (newValue / 100) * containerWidth;
    setCanScrollRight(scrolled + 5 < maxTranslate); // add 5px tolerance to avoid float mismatch
  }

  // React to value change
  useEffect(() => {
    if (containerRef.current && data.length > 0) {
      updateScrollButtons(value);
    }
  }, [value, data]);

  // Scroll left
  function handlePrev() {
    const newValue = Math.max(value - 50, 0);
    setValue(newValue);
  }

  // Scroll right
  function handleNext() {
    const containerWidth = containerRef.current.offsetWidth;
    const totalItemsWidth = data.length * itemWidth;
    const maxTranslate = totalItemsWidth - containerWidth;

    const newValue = value + 50;
    if ((newValue / 100) * containerWidth < maxTranslate) {
      setValue(newValue);
    } else {
      const edgePercent = (maxTranslate / containerWidth) * 100;
      setValue(edgePercent);
    }
  }

  return [value, canScrollLeft,  canScrollRight, containerRef, handlePrev, handleNext];
};

export default useScroller;
