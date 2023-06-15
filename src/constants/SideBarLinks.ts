import { GRID, PARTING_WORD, TYPOGRAPHY, UI } from "@/constants/LinkTitles";
import { ILink } from "@/interfaces/ILink";

export const SIDEBAR_LINKS = [
  { title: PARTING_WORD, to: "parting-word" },
  { title: GRID, to: "grid" },
  { title: TYPOGRAPHY, to: "typography" },
  { title: UI, to: "ui" },
] as ILink[];
