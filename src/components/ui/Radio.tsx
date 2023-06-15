import { ICheckbox } from "@/interfaces/ICheckbox";
import "@assets/styles/components/ui/Radio.scss";
import { useState } from "react";

interface IRadioProps extends ICheckbox {
  check: (newValue: string) => void;
}

export const Radio = ({ id, name, value, label, check }: IRadioProps) => {
  const [checked, setIsChecked] = useState(false);
  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked((prev) => !prev);
    check(e.target.value);
  };

  return (
    <div className="radio">
      <input
        type="radio"
        className="radio__input"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
        onChange={handleCheck}
      />
      <label htmlFor={id} className="radio__label">
        {label}
      </label>
    </div>
  );
};
