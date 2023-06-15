import { SELECT_ITEMS } from "@/constants/SelectItems";
import "@assets/styles/components/SelectList.scss";
import { Select } from "@components/ui/select/Select";

export const SelectList = () => {
  return (
    <div className="select-list">
      <h3 className="select-list__title">Выпадающий список</h3>

      <p className="select-list__subtitle">
        Компонент состоит из текстового поля и выпадающей подсказки
      </p>

      <div className="select-list__examples">
        <div className="select-list__item">
          <Select items={SELECT_ITEMS} />
        </div>
        <div className="select-list__item">
          <Select items={SELECT_ITEMS} />
        </div>
        <div className="select-list__item">
          <Select items={SELECT_ITEMS} />
        </div>
      </div>
    </div>
  );
};
