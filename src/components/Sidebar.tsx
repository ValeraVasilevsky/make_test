import { Link } from "@/components/ui/Link";
import { SIDEBAR_LINKS } from "@/constants/SideBarLinks";
import "@assets/styles/components/Sidebar.scss";

interface ISidebarProps {
  navigateTo: (sectionId: string) => void;
  currentLinkId: string;
}

export const Sidebar = ({ navigateTo, currentLinkId }: ISidebarProps) => {
  return (
    <div className="sidebar">
      <div className="sidebar__links">
        {SIDEBAR_LINKS.map((link) => (
          <div className="sidebar__link" key={link.to}>
            <Link
              currentLinkId={currentLinkId}
              title={link.title}
              to={link.to}
              click={() => navigateTo(link.to)}
              isInsideApp
            />
          </div>
        ))}
      </div>
    </div>
  );
};
