import { APISchema } from '~/api/schema';
import { Role, Franchise, ExternalLink, Manga, MangaKind, MangaRelation, MangaShort, MangaStatus, MangaTopic } from '~/api/definitions';
import { ShikimoriOrder, ShikimoriParameter, ShikimoriMyListStatus } from '~/utils/types';

export interface RanobeGetParams {
  page?: number;
  limit?: number;
  order?: ShikimoriOrder;
  status?: MangaStatus;
  season?: ShikimoriParameter;
  score?: number;
  genre?: ShikimoriParameter;
  publisher?: ShikimoriParameter;
  franchise?: ShikimoriParameter;
  censored?: boolean;
  mylist?: ShikimoriMyListStatus;
  ids?: ShikimoriParameter;
  exclude_ids?: ShikimoriParameter;
  search?: string;
}
export interface RanobeGetByIdParams {
  id: number;
}
export interface RanobeRolesParams {
  id: number;
}
export interface RanobeSimilarParams {
  id: number;
}
export interface RanobeRelatedParams {
  id: number;
}
export interface RanobeFranchiseParams {
  id: number;
}
export interface RanobeExternalLinksParams {
  id: number;
}
export interface RanobeTopicsParams {
  id: number;
}

export type RanobeGetResponse = MangaShort[]
export type RanobeGetByIdResponse = Manga;
export type RanobeRolesResponse = Role[] 
export type RanobeSimilarResponse = MangaShort[]
export type RanobeRelatedResponse = MangaRelation[]
export type RanobeFranchiseResponse = Franchise;
export type RanobeExternalLinksResponse = ExternalLink[];
export type RanobeTopicsResponse = MangaTopic[];

export class RanobeAPI extends APISchema {
  async get(params: RanobeGetParams): Promise<RanobeGetResponse> {
    const response = await this.axios.get('/ranobe', { params });
    return response.data;
  }
  
  async getById(params: RanobeGetByIdParams): Promise<RanobeGetByIdResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}`);
    return response.data;
  }
  
  async roles(params: RanobeRolesParams): Promise<RanobeRolesResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/roles`);
    return response.data;
  }
  
  async similar(params: RanobeSimilarParams): Promise<RanobeSimilarResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/similar`);
    return response.data;
  }
  
  async related(params: RanobeRelatedParams): Promise<RanobeRelatedResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/related`);
    return response.data;
  }
  
  async franchise(params: RanobeFranchiseParams): Promise<RanobeFranchiseResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/franchise`);
    return response.data;
  }
  
  async externalLinks(params: RanobeExternalLinksParams): Promise<RanobeExternalLinksResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/external_links`);
    return response.data;
  }
  
  async topics(params: RanobeTopicsParams): Promise<RanobeTopicsResponse> {
    const response = await this.axios.get(`/ranobe/${params.id}/topics`);
    return response.data;
  }
}