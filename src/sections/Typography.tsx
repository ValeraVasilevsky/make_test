import { TYPOGRAPHY } from "@/constants/LinkTitles";
import { MOBILE_ID, TABS_TITLES } from "@/constants/TabsTitles";
import { TYPOGRAPHY_SUBTITLE } from "@/constants/TypographySubtitle";
import { ISection } from "@/interfaces/ISection";
import { useIntersection } from "@/utils/useIntersection";
import { TypographyDesktop } from "@components/TypographyDesktop";
import { TypographyMobile } from "@components/TypographyMobile";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { Tabs } from "@/components/ui/tabs/Tabs";

import "@assets/styles/sections/Typography.scss";
import { useCallback, useEffect, useRef, useState } from "react";

export const Typography = ({ id, intersect }: ISection) => {
  const [tabId, setTabId] = useState("");
  const handleSelectTab = (tab_id: string) => {
    setTabId(tab_id);
  };
  const isMobile = useCallback(() => tabId === MOBILE_ID, [tabId]);

  const ref = useRef<HTMLDivElement | null>(null);
  const isIntersection = useIntersection(ref);

  useEffect(() => {
    if (isIntersection) {
      intersect(id);
    }
  }, [isIntersection, intersect, id]);

  return (
    <div className="typography" id={id} ref={ref}>
      <SectionTitle title={TYPOGRAPHY} />

      <p className="typography__subtitle">{TYPOGRAPHY_SUBTITLE}</p>

      <Tabs tabs={TABS_TITLES} select={handleSelectTab} />
      {isMobile() ? <TypographyMobile /> : <TypographyDesktop />}
    </div>
  );
};
