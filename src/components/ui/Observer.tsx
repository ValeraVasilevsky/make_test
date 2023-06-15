import { useEffect, useRef } from "react";

interface IObserverProps {
  intersect: (sectionId: string) => void;
  id: string;
}

export const Observer = ({ intersect, id }: IObserverProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const elementObserver = document.querySelector(".observer");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (ref.current && entry.isIntersecting) intersect(id);
    });

    if (elementObserver) observer?.observe(elementObserver);

    return () => {
      observer?.disconnect();
    };
  }, [intersect]);

  return <div className="observer"></div>;
};
