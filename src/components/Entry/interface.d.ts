export interface EntryProps {
  entry_id: number;
  diaryTitle: string;
  diaryEntryBody: string;
  date: string;
  delete: (id: number) => void;
  edit: (id: number) => void;
}
