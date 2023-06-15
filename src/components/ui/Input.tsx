import { useClickOutside } from "@/utils/useClickOutside";
import "@assets/styles/components/ui/Input.scss";
import { useCallback, useState } from "react";

interface IInputProps {
  placeholder: string;
  isError?: boolean;
  modelValue?: string;
  onChange: (value: string) => void;
}

export const Input = ({
  placeholder,
  isError,
  modelValue,
  onChange,
}: IInputProps) => {
  const [value, setValue] = useState(modelValue);
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange(e.target.value);
  };
  const handleClickOutside = () => {
    setIsFocused(false);
  };
  const ref = useClickOutside(handleClickOutside);

  const isActive = useCallback(() => {
    if (value || isFocused) return true;
    return false;
  }, [value, isFocused]);
  const isValid = useCallback(() => isError, [isError]);

  const getInputClasses = () =>
    `input ${isActive() ? "input_active" : ""} ${
      isValid() ? "input_error" : ""
    }`;
  const getPlaceholderClasses = () =>
    `input__placeholder ${isActive() ? "input__placeholder_active" : ""} ${
      isValid() ? "input__placeholder_error" : ""
    }`;

  return (
    <div className={getInputClasses()} ref={ref}>
      <input
        className="input__textfield"
        type="text"
        onFocus={() => setIsFocused(true)}
        onChange={handleInput}
        defaultValue={value}
      />
      <p className={getPlaceholderClasses()}>{placeholder}</p>
      {isValid() && <p className="input__error-text">Текст ошибки</p>}
    </div>
  );
};
