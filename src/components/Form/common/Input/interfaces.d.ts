export interface InputProps {
  type: string;
  name: string;
  label: string;
  placeholder?: string;
  value: string;
  error?: string;
  [key: string]: any;
}
