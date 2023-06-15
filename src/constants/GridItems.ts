import { IGridExample } from "@/interfaces/IGridItem";

import DesktopGridImage from "@assets/img/desktop-grid.png";
import MobileGridImage from "@assets/img/mobile-grid.png";
import TabletGridImage from "@assets/img/tablet-grid.png";

export const GRID_ITEMS = [
  {
    title: "Десктоп (1200+)",
    properties: {
      content: {
        name: "Контент",
        value: "1072–1312",
      },
      columns: {
        name: "Колонок",
        value: "12",
      },
      columnWidth: {
        name: "Ширина колонки",
        value: "60-80",
      },
      gap: {
        name: "Межколонник",
        value: "32",
      },
    },
    image: DesktopGridImage,
  },
  {
    title: "Планшет (736+)",
    properties: {
      content: {
        name: "Контент",
        value: "672–928",
      },
      columns: {
        name: "Колонок",
        value: "8",
      },
      columnWidth: {
        name: "Ширина колонки",
        value: "56-88",
      },
      gap: {
        name: "Межколонник",
        value: "32",
      },
    },
    image: TabletGridImage,
  },
  {
    title: "Телефон (320+)",
    properties: {
      content: {
        name: "Контент",
        value: "296–424",
      },
      columns: {
        name: "Колонок",
        value: "4",
      },
      columnWidth: {
        name: "Ширина колонки",
        value: "56-88",
      },
      gap: {
        name: "Межколонник",
        value: "24",
      },
    },
    image: MobileGridImage,
  },
] as IGridExample[];
