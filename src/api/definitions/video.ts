import { Nullable } from '~/utils/types';

export type VideoKind = 'pv' | 'character_trailer' | 'cm' | 'op' | 'ed' | 'op_ed_clip' | 'clip' | 'other' | 'episode_preview';
export type VideoHosting = 'youtube' | 'vk' | 'ok' | 'coub' | 'rutube' | 'vimeo' | 'sibnet' | 'yandex' | 'streamable' | 'smotret_anime' | 'myvi' | 'youmite' | 'viuly' | 'stormo' | 'mediafile';

export interface Video {
  id: number;
  url: string;
  image_url: string;
  player_url: string;
  name: Nullable<string>;
  kind: VideoKind;
  hosting: VideoHosting
}