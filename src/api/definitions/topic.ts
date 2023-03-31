import { Forum } from './forum';
import { DateString } from '~/utils/types';
import { UserShort } from './user';
import { Linked } from './linked';

export interface Topic<L extends Linked = Linked> {
  id: number;
  topic_title: string;
  body: string;
  html_body: string;
  html_footer: string;
  created_at: DateString;
  comments_count: number;
  forum: Forum;
  user: UserShort;
  type: string;
  linked_id: number;
  linked_type: string;
  linked: L;
  viewed: boolean;
  last_comment_viewed: null;
  event: null;
  episode: null;
}

export type TopicShort = Pick<Topic, 'id' | 'linked' | 'event' | 'episode' | 'created_at'> & Record<'url', string>;