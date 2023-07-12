import { APISchema } from '~/api/schema';
import { 
  Anime, 
  AnimeShort, 
  AnimeDuration, 
  AnimeKind, 
  AnimeStatus, 
  AnimeRelation, 
  AnimeTopic, 
  Role, 
  Screenshot, 
  Franchise, 
  ExternalLink 
} from '~/api/definitions';
import { ShikimoriOrder, ShikimoriParameter, ShikimoriRating, ShikimoriMyListStatus } from '~/utils/types';

export interface AnimesGetParams {
  page?: number;
  limit?: number;
  order?: ShikimoriOrder;
  kind?: ShikimoriParameter<AnimeKind>;
  status?: AnimeStatus;
  season?: ShikimoriParameter;
  score?: number;
  duration?: AnimeDuration;
  rating?: ShikimoriRating;
  genre?: ShikimoriParameter;
  studio?: ShikimoriParameter;
  franchise?: ShikimoriParameter;
  censored?: boolean;
  mylist?: ShikimoriMyListStatus;
  ids?: ShikimoriParameter;
  exclude_ids?: ShikimoriParameter;
  search?: string;
}
export interface AnimesGetByIdParams {
  id: number;
}
export interface AnimesRolesParams {
  id: number;
}
export interface AnimesSimilarParams {
  id: number;
}
export interface AnimesRelatedParams {
  id: number;
}
export interface AnimesScreenshotsParams {
  id: number;
}
export interface AnimesFranchiseParams {
  id: number;
}
export interface AnimesExternalLinksParams {
  id: number;
}
export interface AnimesTopicsParams {
  id: number;
}

export type AnimesGetResponse = AnimeShort[]
export type AnimesGetByIdResponse = Anime;
export type AnimesRolesResponse = Role[] 
export type AnimesSimilarResponse = AnimeShort[]
export type AnimesRelatedResponse = AnimeRelation[]
export type AnimesScreenshotsResponse = Screenshot[]
export type AnimesFranchiseResponse = Franchise;
export type AnimesExternalLinksResponse = ExternalLink[];
export type AnimesTopicsResponse = AnimeTopic[];

export class AnimesAPI extends APISchema {
  async get(params: AnimesGetParams): Promise<AnimesGetResponse> {
    const response = await this.axios.get('/animes', { params });
    return response.data;
  }
  
  async getById(params: AnimesGetByIdParams): Promise<AnimesGetByIdResponse> {
    const response = await this.axios.get(`/animes/${params.id}`);
    return response.data;
  }
  
  async roles(params: AnimesRolesParams): Promise<AnimesRolesResponse> {
    const response = await this.axios.get(`/animes/${params.id}/roles`);
    return response.data;
  }
  
  async similar(params: AnimesSimilarParams): Promise<AnimesSimilarResponse> {
    const response = await this.axios.get(`/animes/${params.id}/similar`);
    return response.data;
  }
  
  async related(params: AnimesRelatedParams): Promise<AnimesRelatedResponse> {
    const response = await this.axios.get(`/animes/${params.id}/related`);
    return response.data;
  }
  
  async screenshots(params: AnimesScreenshotsParams): Promise<AnimesScreenshotsResponse> {
    const response = await this.axios.get(`/animes/${params.id}/screenshots`);
    return response.data;
  }
  
  async franchise(params: AnimesFranchiseParams): Promise<AnimesFranchiseResponse> {
    const response = await this.axios.get(`/animes/${params.id}/franchise`);
    return response.data;
  }
  
  async externalLinks(params: AnimesExternalLinksParams): Promise<AnimesExternalLinksResponse> {
    const response = await this.axios.get(`/animes/${params.id}/external_links`);
    return response.data;
  }
  
  async topics(params: AnimesTopicsParams): Promise<AnimesTopicsResponse> {
    const response = await this.axios.get(`/animes/${params.id}/topics`);
    return response.data;
  }
}