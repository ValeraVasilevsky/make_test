import { Input } from "@/components/ui/Input";
import "@assets/styles/components/Textfields.scss";
import { useState } from "react";

export const Textfields = () => {
  const [value, setValue] = useState("");
  const handleInput = (newValue: string) => {
    setValue(newValue);
  };

  return (
    <div className="textfields">
      <h3 className="textfields__title">Текстовое поле</h3>

      <div className="textfields__examples">
        <div className="textfields__input">
          <Input placeholder="E-mail" onChange={handleInput} />
        </div>

        <div className="textfields__input">
          <p className="textfields__name">Ховер</p>
          <Input placeholder="E-mail" onChange={handleInput} />
        </div>

        <div className="textfields__input">
          <p className="textfields__name">Ввод</p>
          <Input
            placeholder="E-mail"
            onChange={handleInput}
            modelValue="office@make.st"
          />
        </div>

        <div className="textfields__input">
          <p className="textfields__name">Ошибка</p>
          <Input
            placeholder="E-mail"
            isError
            onChange={handleInput}
            modelValue="office@make.st"
          />
        </div>
      </div>
    </div>
  );
};
