import { DateString, Nullable } from '~/utils/types';

export interface ExternalLink {
  id: Nullable<number>;
  kind: string;
  url: string;
  source: string;
  entry_id: number;
  entry_type: string;
  created_at: Nullable<DateString>;
  updated_at: Nullable<DateString>;
  imported_at: Nullable<DateString>;
}