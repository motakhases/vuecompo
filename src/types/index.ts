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

/**
 * Pagination
 * ---------------------------------------------------
 */
export interface ListsObject {
  title: string;
  value: number;
}

export interface Paginate {
  limit: number;
  page: number;
}

/**
 * DatePicker
 * ---------------------------------------------------
 */
export interface DateMoment {
  format: (a: string) => string;
  param: string;
}
export interface Attributes {
  class: string;
}
export type DatePickerValue = string | string[];

export type AmountFilterValue = string | string[]

/**
 * @/components/Dropdown/Item
 * ---------------------------------------------------
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
 * ---------------------------------------------------
 */
export interface DataSheetItemSpans {
  xs?: number;
  md?: number;
  lg?: number;
}
export interface PageHeadingStatus {
  text: string;
  type: string;
}

/**
 * @/components/NavigationBar
 * --------------------------------------------------
 */
export interface INavigationBarTerminal {
  domain: string;
  id?: string;
  name: string;
}
export interface INavigationBarActiveTerminal {
  title: string;
  link: string | null;
  icon: string;
}
export interface INavigationBarLinks extends INavigationBarActiveTerminal {
  active?: boolean;
}

/**
 * @/components/NavigationBar
 * --------------------------------------------------
 */

export interface QuickFilterBtn {
  text: string;
  id: number;
  active: boolean;
  click(): void;
}
