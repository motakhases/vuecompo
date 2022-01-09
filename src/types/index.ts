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
