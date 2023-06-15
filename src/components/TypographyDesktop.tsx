import {
  H1,
  H2,
  H3,
  H4,
  P_14,
  P_16,
  P_18,
  P_LEAD,
} from "@/constants/TypographyItems";
import "@assets/styles/components/ui/TypographyDesktop.scss";

export const TypographyDesktop = () => {
  return (
    <div className="typography-desktop">
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{H1.title}</p>
        <h1 className="typography-desktop__value">
          <span className="typography-desktop_h1">{H1.value}</span>
        </h1>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{H2.title}</p>
        <h2 className="typography-desktop__value">
          <span className="typography-desktop_h2">{H2.value}</span>
        </h2>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{H3.title}</p>
        <h3 className="typography-desktop__value">
          <span className="typography-desktop_h3">{H3.value}</span>
        </h3>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{H4.title}</p>
        <h4 className="typography-desktop__value">
          <span className="typography-desktop_h4">{H4.value}</span>
        </h4>
      </div>

      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{P_LEAD.title}</p>
        <p className="typography-desktop__value">
          <span className="typography-desktop_p-lead">{P_LEAD.value}</span>
        </p>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{P_18.title}</p>
        <p className="typography-desktop__value">
          <span className="typography-desktop_p-18">{P_18.value}</span>
        </p>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{P_16.title}</p>
        <p className="typography-desktop__value">
          <span className="typography-desktop_p-16">{P_16.value}</span>
        </p>
      </div>
      <div className="typography-desktop__item">
        <p className="typography-desktop__title">{P_14.title}</p>
        <p className="typography-desktop__value">
          <span className="typography-desktop_p-14">{P_14.value}</span>
        </p>
      </div>
    </div>
  );
};
