'use client';
import { useEffect, useState } from 'react';

export const useDimentions = () => {
  const [width, setWidth] = useState<any>(undefined);
  const [height, setHeight] = useState<any>(undefined);
  useEffect(() => {
    const handleResize = () => {
      setHeight(window.innerHeight);
      setWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return { width, height };
};
