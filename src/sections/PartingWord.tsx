import { PARTING_WORD_TEXT } from "@/constants/PartingWordText";
import { ISection } from "@/interfaces/ISection";
import { useIntersection } from "@/utils/useIntersection";
import "@assets/styles/sections/PartingWord.scss";
import { useEffect, useRef } from "react";

export const PartingWord = ({ id, intersect }: ISection) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersection = useIntersection(ref);

  useEffect(() => {
    if (isIntersection) {
      intersect(id);
    }
  }, [isIntersection, intersect, id]);

  return (
    <div className="parting-word" id={id} ref={ref}>
      <h1 className="parting-word__title">Тестовое задание</h1>
      <h3 className="parting-word__subtitle">Уровень: junior</h3>

      <p className="parting-word__text">{PARTING_WORD_TEXT}</p>
    </div>
  );
};
