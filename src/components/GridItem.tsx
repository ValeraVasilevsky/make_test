import { IGridItem } from "@/interfaces/IGridItem";
import "@assets/styles/components/GridItem.scss";

export const GridItem = ({
  title,
  properties: { content, columns, columnWidth, gap },
  image,
}: IGridItem) => {
  return (
    <div className="grid-example">
      <h3 className="grid-example__title">{title}</h3>

      <div className="grid-example__properties">
        <div className="grid-example__property">
          <p className="grid-example__name">{content.name}</p>
          <p className="grid-example__value">{content.value}</p>
        </div>

        <div className="grid-example__property">
          <p className="grid-example__name">{columns.name}</p>
          <p className="grid-example__value">{columns.value}</p>
        </div>

        <div className="grid-example__property">
          <p className="grid-example__name">{columnWidth.name}</p>
          <p className="grid-example__value">{columnWidth.value}</p>
        </div>

        <div className="grid-example__property">
          <p className="grid-example__name">{gap.name}</p>
          <p className="grid-example__value">{gap.value}</p>
        </div>
      </div>

      <img className="grid-example__image" src={image} alt={title} />
    </div>
  );
};
