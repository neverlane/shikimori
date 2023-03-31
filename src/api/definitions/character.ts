import { DateString, Nullable } from '~/utils/types';
import { AnimeShort } from './anime';
import { MangaShort } from './manga';
import { ShikimoriImageSizes } from './shikimori-image';

export type WithRole<T> = T & { role: string; roles: string[] };

export interface Character {
  id: number;
  name: string;
  russian: string;
  image: ShikimoriImageSizes;
  url: string;
  altname: Nullable<string>;
  japanese: Nullable<string>;
  description: Nullable<string>;
  description_html: Nullable<string>;
  description_source: Nullable<string>;
  favoured: boolean;
  thread_id: number;
  topic_id: number;
  updated_at: DateString;
  seuy: CharacterShort[];
  animes: WithRole<AnimeShort>[];
  mangas: WithRole<MangaShort>[];
}

export type CharacterShort = Pick<Character, 'id' | 'name' | 'russian' | 'image' | 'url'>;