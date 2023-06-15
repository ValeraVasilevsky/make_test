import { CHECKBOXES } from "@/constants/Checkboxes";
import { RADIOS } from "@/constants/Radios";
import { ICheckbox } from "@/interfaces/ICheckbox";
import "@assets/styles/components/CheckboxRadioButtons.scss";
import { Checkbox } from "@components/ui/Checkbox";
import { Radio } from "@components/ui/Radio";

export const CheckboxRadioButtons = () => {
  const check = ({ id, name, value }: ICheckbox) =>
    console.log({ id, name, value });

  return (
    <div className="checkbox-radio-buttons">
      <h3 className="checkbox-radio-buttons__title">Чекбокс, радиобаттон</h3>

      <div className="checkbox-radio-buttons__examples">
        <div className="checkbox-radio-buttons__item">
          {CHECKBOXES.map((checkbox) => (
            <Checkbox
              key={checkbox.id}
              label={checkbox.label}
              id={checkbox.id}
              name={checkbox.name}
              value={checkbox.value}
              check={() => check(checkbox)}
            />
          ))}
        </div>
        <div className="checkbox-radio-buttons__item">
          {RADIOS.map((radio) => (
            <Radio
              key={radio.id}
              label={radio.label}
              id={radio.id}
              name={radio.name}
              value={radio.value}
              check={() => check(radio)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
