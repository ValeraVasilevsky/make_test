import "@assets/styles/components/Dialog.scss";
import { Icon } from "@components/ui/Icon";
import { useCallback } from "react";

interface IDialog {
  children: React.ReactNode;
  close: () => void;
  isVisible: boolean;
}

export const Dialog = ({ children, close, isVisible }: IDialog) => {
  const getIsVisible = useCallback(() => isVisible, [isVisible]);

  return (
    <>
      {getIsVisible() && (
        <div className="dialog dialog_active">
          <div className="dialog__children">{children}</div>
          <div className="dialog__close" onClick={close}>
            <Icon name="close" />
          </div>
        </div>
      )}
    </>
  );
};
