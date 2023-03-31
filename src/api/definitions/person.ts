import { DateString, Nullable } from '~/utils/types';
import { AnimeShort } from './anime';
import { Birthday } from './birth';
import { CharacterShort } from './character';
import { MangaShort } from './manga';
import { ShikimoriImageSizes } from './shikimori-image';

export type GroupedRole = [string, number];

export interface PersonRoles {
  characters?: CharacterShort[];
  animes?: AnimeShort[];
}

export interface PersonWorks {
  anime: Nullable<AnimeShort>;
  manga: Nullable<MangaShort>;
  role: string;
}

export interface Person {
  id: number;
  name: string;
  russian: string;
  image: ShikimoriImageSizes;
  url: string;
  japanese: string;
  job_title: string;
  birth_on: Nullable<Birthday>;
  deceased_on: Nullable<Birthday>;
  website: string;
  groupped_roles: GroupedRole[];
  roles: PersonRoles[];
  works: PersonWorks[];
  topic_id: Nullable<number>;
  person_favoured: boolean;
  producer: boolean;
  producer_favoured: boolean;
  mangaka: boolean;
  mangaka_favoured: boolean;
  seyu: boolean;
  seyu_favoured: boolean;
  updated_at: DateString;
  thread_id: Nullable<number>;
  birthday: Nullable<Birthday>;
}

export type PersonShort = Pick<Person, 'id' | 'name' | 'russian' | 'image' | 'url'>;