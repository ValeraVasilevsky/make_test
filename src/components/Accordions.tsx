import { ACCORDION } from "@/constants/Accordion";
import "@assets/styles/components/Accordions.scss";
import { Accordion } from "@components/ui/Accordion";

export const Accordions = () => {
  return (
    <div className="accordions">
      <h3 className="accordions__title">Аккордеон</h3>

      <Accordion
        id={ACCORDION.id}
        title={ACCORDION.title}
        content={ACCORDION.content}
      />
      <Accordion
        id={ACCORDION.id}
        title={ACCORDION.title}
        content={ACCORDION.content}
      />
      <Accordion
        id={ACCORDION.id}
        title={ACCORDION.title}
        content={ACCORDION.content}
      />
    </div>
  );
};
