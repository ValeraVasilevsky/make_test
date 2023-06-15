import { ICheckbox } from "@/interfaces/ICheckbox";

const FIRST_RADIO = {
  id: "first-radio",
  name: "first-radio",
  value: "firstRadio",
  label: "Пластмассовый мир победил",
} as ICheckbox;

const SECOND_RADIO = {
  id: "second-radio",
  name: "second-radio",
  value: "secondRadio",
  label: "Макет оказался сильней",
} as ICheckbox;

const THIRD_RADIO = {
  id: "third-radio",
  name: "third-radio",
  value: "thirdRadio",
  label: "Последний корбалик остыл",
} as ICheckbox;

export const RADIOS = [FIRST_RADIO, SECOND_RADIO, THIRD_RADIO] as ICheckbox[];
