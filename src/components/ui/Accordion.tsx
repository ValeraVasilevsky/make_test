import { IAccordion } from "@/interfaces/IAccordion";
import "@assets/styles/components/ui/Accordion.scss";
import { Icon } from "@components/ui/Icon";
import { useCallback, useState } from "react";

export const Accordion = ({ title, content }: IAccordion) => {
  const [isVisible, setIsVisible] = useState(false);
  const getAccordionClass = useCallback(
    () => (isVisible ? "accordion_active" : ""),
    [isVisible]
  );
  const getAccordionTitleClass = useCallback(
    () => (isVisible ? "accordion__title_active" : ""),
    [isVisible]
  );
  const getAccordionContentClass = useCallback(
    () => (isVisible ? "accordion__content_active" : ""),
    [isVisible]
  );
  const getAccordionIconClass = useCallback(
    () => (isVisible ? "accordion__icon_active" : ""),
    [isVisible]
  );
  const iconName = useCallback(
    () => (isVisible ? "arrowUp" : "arrowDown"),
    [isVisible]
  );

  return (
    <div className={`accordion ${getAccordionClass()}`}>
      <div
        className="accordion__field"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        <p className={`accordion__title ${getAccordionTitleClass()}`}>
          {title}
        </p>
        <span className={`accordion__icon  ${getAccordionIconClass()}`}>
          <Icon name={iconName()} />
        </span>
      </div>
      <p className={`accordion__content ${getAccordionContentClass()}`}>
        {content}
      </p>
    </div>
  );
};
