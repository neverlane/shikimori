import { DateString, Nullable } from '~/utils/types';

export interface Review {
  id: number;
  user_id: number;
  anime_id: Nullable<number>;
  manga_id: Nullable<number>;
  body: string;
  opinion: 'positive' | 'neutral' | 'negative';
  is_written_before_release: boolean;
  created_at: DateString;
  updated_at: DateString;
  comments_count: number;
  cached_votes_up: number;
  cached_votes_down: number;
  changed_at: DateString;
}