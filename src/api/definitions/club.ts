import { Nullable } from '~/utils/types';
import { AnimeShort } from './anime';
import { CharacterShort } from './character';
import { MangaShort } from './manga';
import { ShikimoriImage, ShikimoriImageSizes } from './shikimori-image';
import { UserShort } from './user';

export type ClubJoinPolicy = 'free' | 'member_invite' | 'admin_invite' | 'owner_invite'; 
export type ClubCommentPolicy = 'free' | 'members' | 'admins'; 
export type ClubTopicPolicy = 'members' | 'admins';
export type ClubImageUploadPolicy = 'members' | 'admins';
export interface Club {
  id: number;
  name: string;
  logo: ShikimoriImageSizes;
  is_censored: boolean;
  join_policy: ClubJoinPolicy;
  comment_policy: ClubCommentPolicy;
  description: Nullable<string>;
  description_html: Nullable<string>;
  style_id: Nullable<number>;
  animes: AnimeShort[];
  mangas: MangaShort[];
  characters: CharacterShort[];
  members: UserShort[];
  images: ShikimoriImage[];
}

export type ClubShort = Pick<Club, 'id' | 'name' | 'logo' | 'is_censored' | 'join_policy' | 'comment_policy'>;