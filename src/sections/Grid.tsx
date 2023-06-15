import "@assets/styles/sections/Grid.scss";

import { GridItem } from "@/components/GridItem";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GRID_ITEMS } from "@/constants/GridItems";
import { GRID_SUBTITLE } from "@/constants/GridSubtitle";
import { GRID } from "@/constants/LinkTitles";
import { ISection } from "@/interfaces/ISection";
import { useIntersection } from "@/utils/useIntersection";
import { useEffect, useRef } from "react";

export const Grid = ({ id, intersect }: ISection) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersection = useIntersection(ref);

  useEffect(() => {
    if (isIntersection) {
      intersect(id);
    }
  }, [isIntersection, intersect, id]);

  return (
    <div className="grid" id={id} ref={ref}>
      <SectionTitle title={GRID} />

      <p className="grid__subtitle">{GRID_SUBTITLE}</p>

      <div className="grid__examples">
        {GRID_ITEMS.map((example) => (
          <GridItem
            key={example.title}
            title={example.title}
            properties={example.properties}
            image={example.image}
          />
        ))}
      </div>
    </div>
  );
};
