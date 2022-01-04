import { useState, useEffect } from 'react';

export const useSize = (ele) => {
  const [size, setSize] = useState({});

  function handleResize() {
    const {
      innerWidth, innerHeight, clientWidth, clientHeight,
    } = ele?.current ? ele.current : window;
    setSize({
      width: innerWidth || clientWidth, height: innerHeight || clientHeight,
    });
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize, true);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return size;
};
