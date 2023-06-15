import "@assets/styles/components/ui/Fab.scss";
import { Icon } from "@components/ui/Icon";

interface IFabProps {
  iconName: string;
  click: () => void;
}

export const Fab = ({ iconName, click }: IFabProps) => {
  return (
    <button type="button" onClick={click} className="fab">
      <Icon name={iconName} />
    </button>
  );
};
