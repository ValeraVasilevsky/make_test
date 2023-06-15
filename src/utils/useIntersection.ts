import { RefObject, useEffect, useRef, useState } from "react";

export const useIntersection = (ref: RefObject<HTMLElement>) => {
  const [isIntersection, setIsIntersection] = useState(false);
  const { current } = useRef<IntersectionObserver>(
    new IntersectionObserver(
      ([entry]) => setIsIntersection(entry.isIntersecting),
      {
        threshold: 0.3,
      }
    )
  );

  useEffect(() => {
    if (current && ref?.current) current.observe(ref.current);

    return () => {
      current.disconnect();
    };
  }, [ref]);

  return isIntersection;
};
