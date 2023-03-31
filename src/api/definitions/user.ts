import { DateString, Nullable } from '~/utils/types';
import { ShikimoriImageSizes } from './shikimori-image';

export interface User {
  id: number;
  nickname: string;
  avatar: string;
  image: ShikimoriImageSizes;
  last_online_at: Nullable<DateString>;
  url: string;
  name: Nullable<string>;
  sex: Nullable<string>;
  full_years: Nullable<number>;
  last_online: Nullable<string>;
  website: Nullable<string>;
  location: Nullable<string>;
  banned: boolean;
  about: string;
  about_html: string;
  common_info: string[];
  show_comments: boolean;
  in_friends: Nullable<boolean>;
  is_ignored: boolean;
  stats: UserStats;
  style_id: Nullable<number>;
}

export interface UserStats {
  statuses: Record<'anime' | 'manga', UserStatsStatus[]>;
  full_statuses: Record<'anime' | 'manga', UserStatsStatus[]>;
  scores: Record<'anime' | 'manga', UserStatsEntity[]>;
  types: Record<'anime' | 'manga', UserStatsEntity[]>;
  ratings: Record<'anime', UserStatsEntity[]>;
  'has_anime?': boolean;
  'has_manga?': boolean;
  genres: unknown[];
  studios: unknown[];
  publishers: unknown[];
  activity: UserActivity[];
}

export interface UserStatsStatus {
  id: number;
  grouped_id: string;
  name: string;
  size: number;
  type: string;
}

// change to UserStatsEntity = RateStatusStat or no?
export interface UserStatsEntity {
  name: string;
  value: number;
}

export interface UserActivity {
  name: [number, number];
  value: number;
}

export type UserShort = Pick<User, 'id' | 'nickname' | 'avatar' | 'image' | 'last_online_at' | 'url'>;
export interface UserInfo extends UserShort, Pick<User, 'name' | 'sex' | 'website' | 'full_years'> {
  birth_on: Nullable<string>;
  locale: string;
}