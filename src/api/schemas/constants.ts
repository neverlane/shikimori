import { APISchema } from '~/api/schema';
import { AnimeKind, AnimeStatus, MangaKind, MangaStatus, ClubCommentPolicy, ClubImageUploadPolicy, ClubJoinPolicy, Smile } from '~/api/definitions';
import { ShikimoriMyListStatus } from '~/utils/types';

export interface ConstantsAnimeResponse {
  kind: Exclude<AnimeKind, 'tv_13' | 'tv_24' | 'tv_48'>[];
  status: AnimeStatus[];
}
export interface ConstantsMangaResponse {
  kind: MangaKind[];
  status: MangaStatus[];
}
export interface ConstantsUserRateResponse {
  status: ShikimoriMyListStatus[];
}
export interface ConstantsClubResponse {
  join_policy: ClubJoinPolicy[];
  comment_policy: ClubCommentPolicy[];
  image_upload_policy: ClubImageUploadPolicy[];
}
export type ConstantsSmileysResponse = Smile[];

export class ConstantsAPI extends APISchema {
  async anime(): Promise<ConstantsAnimeResponse> {
    const response = await this.axios.get('/constants/anime');
    return response.data;
  }

  async manga(): Promise<ConstantsMangaResponse> {
    const response = await this.axios.get('/constants/manga');
    return response.data;
  }

  async userRate(): Promise<ConstantsUserRateResponse> {
    const response = await this.axios.get('/constants/user_rate');
    return response.data;
  }

  async club(): Promise<ConstantsClubResponse> {
    const response = await this.axios.get('/constants/club');
    return response.data;
  }

  async smileys(): Promise<ConstantsSmileysResponse> {
    const response = await this.axios.get('/constants/smileys');
    return response.data;
  }
}