import { Genre } from './genre';
import { Linked } from './linked';
import { BaseModel, BaseModelRelation, BaseModelStatus } from './model';
import { ShikimoriImageSizes } from './shikimori-image';
import { Studio } from './studio';
import { Topic } from './topic';
import { Video } from './video';

export type AnimeKind = 'tv' | 'movie' | 'ova' | 'ona' | 'special' | 'music' | 'tv_13' | 'tv_24' | 'tv_48';
export type AnimeDuration = 'S' | 'D' | 'F';
export type AnimeStatus = BaseModelStatus;

export interface Anime extends BaseModel {
  kind: AnimeKind;
  genres: Genre<'anime'>[];
  status: AnimeStatus;
  duration: number;
  episodes: number;
  episodes_aired: number;
  fansubbers: string[];
  fandubbers: string[];
  studios: Studio[];
  videos: Video[];
  screenshots: ShikimoriImageSizes[];  
}

export interface AnimeLinked extends Linked {
  kind: AnimeKind;
  episodes: number;
  episodes_aired: number;
}

export type AnimeShort = Pick<Anime, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'aired_on' | 'episodes' | 'episodes_aired' | 'released_on' | 'score' | 'status'>;
export interface AnimeRelation extends BaseModelRelation {
  anime: AnimeShort;
}
export type AnimeTopic = Topic<AnimeLinked>;