import { Genre } from './genre';
import { Linked } from './linked';
import { BaseModel, BaseModelRelation } from './model';
import { Publisher } from './publisher';
import { Topic } from './topic';

export type MangaKind = 'manga' | 'manhwa' | 'manhua' | 'light_novel' | 'novel' | 'one_shot' | 'doujin';
export type MangaStatus = 'anons' | 'ongoing' | 'released' | 'paused' | 'discontinued';

export interface Manga extends BaseModel {
  kind: MangaKind;
  status: MangaStatus;
  genres: Genre<'manga'>[];
  volumes: number;
  chapters: number;
  publishers: Publisher[];
}

export interface MangaLinked extends Linked {
  kind: MangaKind;
  volumes: number;
  chapters: number;
}

export type MangaShort = Pick<Manga, 'id' | 'name' | 'russian' | 'image' | 'url' | 'kind' | 'volumes' | 'chapters' | 'aired_on' | 'released_on' | 'score' | 'status'>;
export interface MangaRelation extends BaseModelRelation {
  manga: MangaShort;
}
export type MangaTopic = Topic<MangaLinked>;