import { DateString } from '~/utils/types';
import { CommentShort } from './comment';
import { UserShort } from './user';

export interface Ban {
  id: number;
  user_id: number;
  comment: CommentShort;
  moderator_id: number;
  reason: string;
  created_at: DateString;
  duration_minutes: number;
  user: UserShort;
  moderator: UserShort;
}