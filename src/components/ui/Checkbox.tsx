import { ICheckbox } from "@/interfaces/ICheckbox";
import "@assets/styles/components/ui/Checkbox.scss";
import { useState } from "react";

interface ICheckboxProps extends ICheckbox {
  check: ({ id, name, value }: ICheckbox) => void;
}

export const Checkbox = ({ id, name, value, label, check }: ICheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheck = ({ id, name, value }: ICheckbox) => {
    check({ id, name, value, label });
    setIsChecked((prev) => !prev);
  };

  return (
    <div className="checkbox">
      <input
        type="checkbox"
        className="checkbox__input"
        id={id}
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => handleCheck({ id, name, value, label })}
      />
      <label htmlFor={id} className="checkbox__label">
        {label}
      </label>
    </div>
  );
};
