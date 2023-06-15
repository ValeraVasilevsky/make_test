import "@assets/styles/components/ui/Button.scss";
import { useCallback } from "react";

interface IButtonProps {
  text: string;
  click: () => void;
  isDisabled?: boolean;
}

export const Button = ({ text, click, isDisabled }: IButtonProps) => {
  const getDisableClass = useCallback(
    () => (isDisabled ? "button_disabled" : ""),
    [isDisabled]
  );
  const disabled = useCallback(() => isDisabled, [isDisabled]);

  return (
    <button
      className={`button ${getDisableClass()}`}
      type="button"
      onClick={click}
      disabled={disabled()}
    >
      {text}
    </button>
  );
};
