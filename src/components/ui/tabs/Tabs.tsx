import { Tab } from "@/components/ui/tabs/Tab";
import { ITab } from "@/interfaces/ITab";
import "@assets/styles/components/ui/tabs/Tabs.scss";
import { useState } from "react";

interface ITabsProps {
  tabs: ITab[];
  select: (tabId: string) => void;
}

export const Tabs = ({ tabs, select }: ITabsProps) => {
  const [firstTab] = tabs;
  const [activeTabId, setActiveTabId] = useState(firstTab.id);
  const handleSelectTab = (tabId: string) => {
    setActiveTabId(tabId);
    select(tabId);
  };

  return (
    <div className="tabs">
      {tabs.map((tab) => (
        <Tab
          activeTabId={activeTabId}
          key={tab.id}
          id={tab.id}
          title={tab.title}
          select={handleSelectTab}
        />
      ))}
    </div>
  );
};
