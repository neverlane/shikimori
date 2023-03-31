import { APISchema } from '~/api/schema';
import { AnimeShort, CharacterShort, Club, ClubCommentPolicy, ClubImageUploadPolicy, ClubShort, ClubTopicPolicy, MangaShort, ShikimoriImage, Topic, UserShort } from '~/api/definitions';

export interface ClubsGetParams {
  page?: number;
  limit?: number;
  search?: string; 
}
export interface ClubsGetByIdParams {
  id: number;
}
export interface ClubsUpdateParams {
  id: number;
  name?: string;
  description?: string;
  display_images?: boolean;
  comment_policy?: ClubCommentPolicy;
  topic_policy?: ClubTopicPolicy;
  image_upload_policy?: ClubImageUploadPolicy;
}
export interface ClubsAnimesParams {
  id: number;
  page?: number;
}
export interface ClubsMangasParams {
  id: number;
  page?: number;
}
export interface ClubsRanobeParams {
  id: number;
  page?: number;
}
export interface ClubsCharactersParams {
  id: number;
  page?: number;
}
export interface ClubsCollectionsParams {
  id: number;
  page?: number;
}
export interface ClubsClubsParams {
  id: number;
  page?: number;
}
export interface ClubsMembersParams {
  id: number;
}
export interface ClubsImagesParams {
  id: number;
}
export interface ClubsJoinParams {
  id: number;
}
export interface ClubsLeaveParams {
  id: number;
}

export type ClubsGetResponse = Club[];
export type ClubsGetByIdResponse = Club;
export type ClubsUpdateResponse = Club;
export type ClubsAnimesResponse = AnimeShort[];
export type ClubsMangasResponse = MangaShort[];
export type ClubsRanobeResponse = MangaShort[];
export type ClubsCharactersResponse = CharacterShort[];
export type ClubsCollectionsResponse = Topic[];
export type ClubsClubsResponse = ClubShort[];
export type ClubsMembersResponse = UserShort[];
export type ClubsImagesResponse = ShikimoriImage[];
export type ClubsJoinResponse = void;
export type ClubsLeaveResponse = void;

export class ClubsAPI extends APISchema {
  async get(params: ClubsGetParams): Promise<ClubsGetResponse> {
    const response = await this.axios.get('/clubs', { params });
    return response.data;
  }

  async getById(params: ClubsGetByIdParams): Promise<ClubsGetByIdResponse> {
    const response = await this.axios.get(`/clubs/${params.id}`);
    return response.data;
  }

  async update(params: ClubsUpdateParams): Promise<ClubsUpdateResponse> {
    const response = await this.axios.patch(`/clubs/${params.id}`, {
      club: params
    });
    return response.data;
  }

  async animes(params: ClubsAnimesParams): Promise<ClubsAnimesResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/animes`, { params });
    return response.data;
  }

  async mangas(params: ClubsMangasParams): Promise<ClubsMangasResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/mangas`, { params });
    return response.data;
  }

  async ranobe(params: ClubsRanobeParams): Promise<ClubsRanobeResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/ranobe`, { params });
    return response.data;
  }

  async characters(params: ClubsCharactersParams): Promise<ClubsCharactersResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/characters`, { params });
    return response.data;
  }

  async collections(params: ClubsCollectionsParams): Promise<ClubsCollectionsResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/collections`, { params });
    return response.data;
  }

  async clubs(params: ClubsClubsParams): Promise<ClubsClubsResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/clubs`, { params });
    return response.data;
  }

  async members(params: ClubsMembersParams): Promise<ClubsMembersResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/members`);
    return response.data;
  }

  async images(params: ClubsImagesParams): Promise<ClubsImagesResponse> {
    const response = await this.axios.get(`/clubs/${params.id}/images`);
    return response.data;
  }

  async join(params: ClubsJoinParams): Promise<ClubsJoinResponse> {
    await this.axios.post(`/clubs/${params.id}/join`);
  }

  async leave(params: ClubsLeaveParams): Promise<ClubsLeaveResponse> {
    await this.axios.post(`/clubs/${params.id}/leave`);
  }
}