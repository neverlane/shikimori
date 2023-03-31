import { Nullable, ShikimoriRating, NullableArray } from '~/utils/types';
import { Genre } from './genre';
import { RateScoreStat } from './rate-score-stat';
import { RateStatusStat } from './rate-status-stat';
import { ShikimoriImageSizes } from './shikimori-image';
import { UserRate } from './user-rate';

export type BaseModelStatus = 'anons' | 'ongoing' | 'released';

export interface BaseModel {
  id: number;
  name: string;
  russian: string;
  image: ShikimoriImageSizes;
  url: string;
  kind: string;
  score: string;
  status: string;
  aired_on: Nullable<string>;
  released_on: Nullable<string>;
  rating: ShikimoriRating;
  english: NullableArray<string>;
  japanese: NullableArray<string>;
  synonims: NullableArray<string>;
  license_name_ru: Nullable<string>;
  description: Nullable<string>;
  description_html: Nullable<string>;
  description_source: Nullable<string>;
  franchise: string;
  favoured: boolean;
  anons: boolean;
  ongoing: boolean;
  thread_id: number;
  topic_id: number;
  myanimelist_id: number;
  genres: Genre[];
  rates_scores_stats: RateScoreStat[];
  rates_statuses_stats: RateStatusStat[];
  updated_at: Date;
  next_episode_at: Nullable<string>;
  licensors: string[];
  user_rate: Nullable<UserRate>;
}

export interface BaseModelRelation {
  relation: string;
  relation_russian: string;
}