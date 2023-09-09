export interface SelectProps {
  id: string;
  defaultOption: string;
  options: Option[];
  onChange: (e: any) => void;
}

export interface Option {
  key: string;
  value: any;
}
