import { SectionTitle } from "@/components/ui/SectionTitle";
import { UI } from "@/constants/LinkTitles";
import { ISection } from "@/interfaces/ISection";
import { useIntersection } from "@/utils/useIntersection";
import "@assets/styles/sections/UI.scss";
import { Accordions } from "@components/Accordions";
import { Buttons } from "@components/Buttons";
import { CheckboxRadioButtons } from "@components/CheckboxRadioButtons";
import { SelectList } from "@components/SelectList";
import { Textfields } from "@components/Textfields";
import { useEffect, useRef } from "react";

export const Ui = ({ id, intersect }: ISection) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersection = useIntersection(ref);

  useEffect(() => {
    if (isIntersection) {
      intersect(id);
    }
  }, [isIntersection, intersect, id]);

  return (
    <div className="ui" id={id} ref={ref}>
      <SectionTitle title={UI} />

      <Textfields />
      <SelectList />
      <Buttons />
      <CheckboxRadioButtons />
      <Accordions />
    </div>
  );
};
