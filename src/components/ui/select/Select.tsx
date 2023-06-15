import { ISelectItem } from "@/interfaces/ISelectItem";
import { useClickOutside } from "@/utils/useClickOutside";
import "@assets/styles/components/ui/select/Select.scss";
import { Icon } from "@components/ui/Icon";
import { SelectItem } from "@components/ui/select/SelectItem";
import { useCallback, useState } from "react";

interface ISelectProps {
  items: ISelectItem[];
}

export const Select = ({ items }: ISelectProps) => {
  const [selectedItem, setSelectedItem] = useState({} as ISelectItem);
  const [isVisible, setIsVisible] = useState(false);

  const openList = () => {
    setIsVisible((prev) => !prev);
  };
  const hideList = () => {
    setIsVisible(false);
  };
  const ref = useClickOutside(hideList);
  const handleSelect = ({ id, title }: ISelectItem) => {
    setSelectedItem({ id, title });
    hideList();
  };
  const iconName = useCallback(() => {
    return isVisible ? "arrowUp" : "arrowDown";
  }, [isVisible]);
  const isSelected = useCallback(
    () => (selectedItem.id ? "select__placeholder_active" : ""),
    [selectedItem.id]
  );

  return (
    <div className="select" ref={ref}>
      <div className="select__field" onClick={openList}>
        <p className={`select__placeholder ${isSelected()}`}>
          Выберите что-нибудь
        </p>
        <p className="select__item-selected">{selectedItem.title}</p>
        <Icon name={iconName()} />
      </div>
      {isVisible && (
        <div className="select__list">
          {items.map((item) => (
            <SelectItem
              key={item.id}
              id={item.id}
              title={item.title}
              selectedItem={selectedItem}
              select={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};
