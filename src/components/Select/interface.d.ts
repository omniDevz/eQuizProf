export interface SelectProps {
  options: {
    value: string;
    label: string;
  }[];
  text: string;
  name: string;
  value: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
}

export interface SelectWrapperProps {
  hasValue: boolean;
}
