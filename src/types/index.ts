import VueI18n from 'vue-i18n';

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
  action: ()=> void;
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

export type AmountFilterValue = string | (string | null)[];

/**
 * @/components/Filters/FilterAccordion
 * ---------------------------------------------------
 */

export type AccordionValue = string | string[];

/**
 * @/components/NavigationBar/SwitchTerminalItem
 * ---------------------------------------------------
 */

export type Translation = VueI18n.TranslateResult;
export interface IActiveTerminal {
  id: string;
  domain: string;
  logo: string;
  name: string;
  route: string;
  status: string;
}
/**
 * @/components/Select/Item
 * ---------------------------------------------------
 */
export interface ISelectOptions {
  text: string;
  value: string | number;
  disabled?: boolean;
  icon?: string;
  logo?: string;
  sub?: string;
}
export interface IEvent {
  target: HTMLInputElement;
}
/**
 * @/components/Dropdown/Item
 * ---------------------------------------------------
 */
export interface IDropdownOptions {
  title: string;
  icon: string;
  color?: string;
  action: () => void;
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
  logo: string;
}
export interface INavigationBarActiveTerminal {
  title: Translation;
  link: string | null;
  icon: string;
  img: string;
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
  value: any;
  click(): void;
}

/**
 * @/components/upload
 * --------------------------------------------------
 */

export interface IUploadedFiles {
  name: string;
  image: string;
  status: string;
  id: string;
  progress: string;
}

/**
 * @/components/upload dropzone
 * --------------------------------------------------
 */
export interface IDropzoneFiles {
  name: string;
  image: string;
  status: string;
  id: string;
  progress: string;
  dataURL: string;
  accepted: boolean;
  upload: {
    uuid: string;
  };
}

/**
 * @/components/messageBox
 * --------------------------------------------------
 */
export interface ITicketRepliedUser {
  name: string;
  id: string;
  // eslint-disable-next-line camelcase
  managed_avatar: string;
}

/**
 * @/components/ListMenu
 * --------------------------------------------------
 */
export interface IListMenu {
  id: number;
  title: string;
  amount: number;
  active?: boolean;
}
export interface ISummaryOptions {
  text: string;
  sub: string;
  infoText?: string;
}
/**
 * @/components/Table
 * --------------------------------------------------
 */
export interface ITableActions {
  title: string,
  icon: string,
  color: string,
  action: void,
  isShow: any,
}

export type TitleTooltip = {
  ticket : string,
  notification : string,
  userProfile : string,
}

/* export enum SocialType {
  circle = 'circle',
  square = 'square',
} */

/**
 * @/components/StatsBlock
 * --------------------------------------------------
 */
export interface StatsBlockItemSpans {
  xs?: number;
  md?: number;
  lg?: number;
}
