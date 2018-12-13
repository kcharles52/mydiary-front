export interface EntryFormProps {
  Edit: boolean;
  title: string;
  diaryTitle: string;
  date: string;
  diaryBody: string;
  onSubmit: () => void;
  onCancel: () => void;
  onChange: (fieldName: string, value: string) => void;
  [key: string]: any;
}
