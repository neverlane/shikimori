import { DateString, Nullable, ShikimoriMyListStatus } from '~/utils/types';

export interface UserRate {
  id: number;
  score: number;
  status: ShikimoriMyListStatus;
  text: Nullable<string>;
  text_html: Nullable<string>;
  episodes: Nullable<number>;
  chapters: Nullable<number>;
  volumes: Nullable<number>;
  rewatches: number;
  created_at: DateString;
  updated_at: DateString;
}

export interface UserRateExtended extends UserRate {
  user_id: number;
  target_id: number;
  target_type: string;
}