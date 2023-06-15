import { ICheckbox } from "@/interfaces/ICheckbox";

const FIRST_CHECKBOX = {
  id: "first-checkbox",
  name: "first-checkbox",
  value: "firstCheckbox",
  label: "Выбери меня",
} as ICheckbox;
const SECOND_CHECKBOX = {
  id: "second-checkbox",
  name: "second-checkbox",
  value: "secondCheckbox",
  label: "Выбери меня",
} as ICheckbox;
const THIRD_CHECKBOX = {
  id: "third-checkbox",
  name: "third-checkbox",
  value: "thirdCheckbox",
  label: "Птица счастья завтрашнего дня",
} as ICheckbox;

export const CHECKBOXES = [
  FIRST_CHECKBOX,
  SECOND_CHECKBOX,
  THIRD_CHECKBOX,
] as ICheckbox[];
