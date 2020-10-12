export interface ISelectOptions {
  value: string;
  label: string;
}

export interface SelectProps {
  options: ISelectOptions[];
  label: string;
  name: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectWrapperProps {
  hasValue: boolean;
}
