import { DateString, Nullable } from '~/utils';
import { UserShort } from './user';

export interface ShikimoriMessage {
  id: string | number;
  kind: string;
  read: boolean;
  body: string;
  html_body: string;
  created_at: DateString;
  linked_id: number;
  linked_type: Nullable<string>;
  linked: Nullable<unknown>;
  from: UserShort;
  to: UserShort;
}

export type ShikimoriMessageShort = Pick<ShikimoriMessage, 'id' | 'kind' | 'read' | 'body' | 'html_body' | 'created_at' | 'linked_id' | 'linked_type' | 'linked'>