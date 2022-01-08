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
