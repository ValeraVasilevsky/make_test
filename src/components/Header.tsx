import { Icon } from "@/components/ui/Icon";
import "@assets/styles/components/Header.scss";

interface IHeaderProps {
  openDialog: () => void;
}

export const Header = ({ openDialog }: IHeaderProps) => {
  const handleOpenDialog = () => {
    openDialog();
  };

  return (
    <div className="header">
      <div className="header__brand">
        <Icon name="logo" />
        <div className="header__user">
          <p className="header__surname">Василевский</p>
          <p className="header__name">Валерий Адександрович</p>
        </div>
      </div>

      <div className="header__menu" onClick={handleOpenDialog}>
        <Icon name="menu" />
      </div>
    </div>
  );
};
