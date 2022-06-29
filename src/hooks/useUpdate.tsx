import { useEffect, useRef } from "react";

const useUpdate = (func: () => void, dep: any[]) => {
  const counter = useRef(0);
  useEffect(() => {
    counter.current += 1;
  });
  useEffect(() => {
    if (counter.current > 1) {
      func();
    }
  }, [dep, func]);
};

export { useUpdate };
