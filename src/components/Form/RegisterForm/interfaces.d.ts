export interface RegisterProps {
  onChange: (fieldName: string, value: string) => void;
  onSubmit: (form:string) => void;
  [key:string]:any;

}
