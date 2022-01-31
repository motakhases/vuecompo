
export interface SegmentedBtn {
  text: string;
  id: number;
  active: boolean;
  click(): void;
}

export interface Tab {
  value: Vue;
  index: number;
  array: Vue[];
}

export interface UserLabelList {
  id: number;
  size: string;
  type: string;
  text: string;
}

export interface UserTaskItems {
  id: number;
  complete: boolean;
  before: boolean;
  disabled: boolean;
  link: string;
  text: string;
}

export interface Announcement {
  title: string;
  message: string;
  date: string;
  image: string;
  link: string;
  icon: string;
}

// pagination interfaces
export interface ListsObject {
  title:string
  value:number
}

export interface Paginate {
  limit:number
  page:number
}

// datepicker
export interface DateMoment {
  format: (a: string) => string,
  param: string
}

export interface Attributes {
  class: string
}

export type DatePickerValue = string | string[]

/**
 * @/components/Dropdown/Item
 */
export interface IDropdownOptions {
  text: string;
  value: string | number;
  disabled?: boolean;
}

export interface IEvent {
  target: HTMLInputElement;
}

/**
 * @/components/DataSheet/Item
 */
export interface DataSheetItemSpans {
  xs: number;
  md: number;
  lg: number;
}

export interface PageHeadingStatus {
  text: string;
  type: string;
}
