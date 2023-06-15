import { ISelectItem } from "@/interfaces/ISelectItem";
import "@assets/styles/components/ui/select/SelectItem.scss";
import { useCallback } from "react";

interface ISelectItemProps extends ISelectItem {
  selectedItem: ISelectItem;
  select: ({ id, title }: ISelectItem) => void;
}

export const SelectItem = ({
  id,
  title,
  select,
  selectedItem,
}: ISelectItemProps) => {
  const handleSelect = () => {
    select({ id, title });
  };
  const getSelectedItemClass = useCallback(
    () => selectedItem.id === id && "select-item_selected",
    [selectedItem.id, id]
  );
  return (
    <div
      className={`select-item ${getSelectedItemClass()}`}
      onClick={handleSelect}
    >
      {title}
    </div>
  );
};
