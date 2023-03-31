import { DateString, Nullable } from '~/utils/types';

export type StyleOwnerType = 'User' | 'Club';

export interface Style {
  id: number;
  owner_id: number;
  owner_type: StyleOwnerType;
  name: string;
  css: string;
  compiled_css: Nullable<string>;
  created_at: DateString;
  updated_at: DateString;
}
