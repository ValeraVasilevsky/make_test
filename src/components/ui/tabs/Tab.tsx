import { ITab } from "@/interfaces/ITab";
import "@assets/styles/components/ui/tabs/Tab.scss";
import { useCallback, useEffect } from "react";

interface ITabProps extends ITab {
  activeTabId: string;
  select: (tabId: string) => void;
}

export const Tab = ({ id, title, activeTabId, select }: ITabProps) => {
  const getActiveTab = useCallback(() => {
    return id === activeTabId ? "tab_active" : "";
  }, [activeTabId, id]);

  useEffect(() => {
    select(activeTabId);
  }, [activeTabId, select]);

  return (
    <p className={`tab ${getActiveTab()}`} onClick={() => select(id)}>
      {title}
    </p>
  );
};
