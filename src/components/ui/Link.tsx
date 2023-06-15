import { ILink } from "@/interfaces/ILink";
import "@assets/styles/components/ui/Link.scss";

interface ILinkProps extends ILink {
  click: (to: string) => void;
  currentLinkId?: string;
  isInsideApp?: boolean;
}

export const Link = ({
  title,
  to,
  click,
  currentLinkId,
  isInsideApp,
}: ILinkProps) => {
  const handleClick = (to: string) => {
    click(to);
  };
  const getActiveClass = () => (currentLinkId === to ? "link_active" : "");
  const getLinkFontClasses = () => (isInsideApp ? "link_inside-app" : "");

  return (
    <div
      className={`link ${getActiveClass()} ${getLinkFontClasses()}`}
      onClick={() => handleClick(to)}
    >
      {title}
    </div>
  );
};
