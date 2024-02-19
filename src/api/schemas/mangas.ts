import { APISchema } from '~/api/schema';
import { Role, Franchise, ExternalLink, Manga, MangaKind, MangaRelation, MangaShort, MangaStatus, MangaTopic } from '~/api/definitions';
import { ShikimoriOrder, ShikimoriParameter, ShikimoriMyListStatus } from '~/utils/types';

export interface MangasGetParams {
  page?: number;
  limit?: number;
  order?: ShikimoriOrder;
  kind?: ShikimoriParameter<MangaKind>;
  status?: MangaStatus;
  season?: ShikimoriParameter;
  score?: number;
  genre?: ShikimoriParameter;
  genre_v2?: ShikimoriParameter;
  publisher?: ShikimoriParameter;
  franchise?: ShikimoriParameter;
  censored?: boolean;
  mylist?: ShikimoriMyListStatus;
  ids?: ShikimoriParameter;
  exclude_ids?: ShikimoriParameter;
  search?: string;
}
export interface MangasGetByIdParams {
  id: number;
}
export interface MangasRolesParams {
  id: number;
}
export interface MangasSimilarParams {
  id: number;
}
export interface MangasRelatedParams {
  id: number;
}
export interface MangasFranchiseParams {
  id: number;
}
export interface MangasExternalLinksParams {
  id: number;
}
export interface MangasTopicsParams {
  id: number;
}

export type MangasGetResponse = MangaShort[]
export type MangasGetByIdResponse = Manga;
export type MangasRolesResponse = Role[]
export type MangasSimilarResponse = MangaShort[]
export type MangasRelatedResponse = MangaRelation[]
export type MangasFranchiseResponse = Franchise;
export type MangasExternalLinksResponse = ExternalLink[];
export type MangasTopicsResponse = MangaTopic[];

export class MangasAPI extends APISchema {
  async get(params: MangasGetParams): Promise<MangasGetResponse> {
    const response = await this.axios.get('/mangas', { params });
    return response.data;
  }

  async getById(params: MangasGetByIdParams): Promise<MangasGetByIdResponse> {
    const response = await this.axios.get(`/mangas/${params.id}`);
    return response.data;
  }

  async roles(params: MangasRolesParams): Promise<MangasRolesResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/roles`);
    return response.data;
  }

  async similar(params: MangasSimilarParams): Promise<MangasSimilarResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/similar`);
    return response.data;
  }

  async related(params: MangasRelatedParams): Promise<MangasRelatedResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/related`);
    return response.data;
  }

  async franchise(params: MangasFranchiseParams): Promise<MangasFranchiseResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/franchise`);
    return response.data;
  }

  async externalLinks(params: MangasExternalLinksParams): Promise<MangasExternalLinksResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/external_links`);
    return response.data;
  }

  async topics(params: MangasTopicsParams): Promise<MangasTopicsResponse> {
    const response = await this.axios.get(`/mangas/${params.id}/topics`);
    return response.data;
  }
}
