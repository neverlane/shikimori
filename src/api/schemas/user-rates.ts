import { APISchema } from '~/api/schema';
import { ShikimoriMyListStatus } from '~/utils';
import { UserRateExtended } from '~/api/definitions';

export interface UserRatesGetParams {
  user_id?: number;
  target_id?: number;
  target_type?: 'Anime' | 'Manga';
  status?: ShikimoriMyListStatus;
  page?: number;
  limit?: number;
}
export interface UserRatesGetByIdParams {
  id: number;
}
export interface UserRatesCreateParams {
  user_id: number;
  target_id: number;
  target_type: 'Anime' | 'Manga';
  status?: string;
  score?: string;
  chapters?: string;
  episodes?: string;
  volumes?: string;
  rewatches?: string;
  text?: string;
}
export type UserRatesUpdateParams = UserRatesGetByIdParams & Pick<UserRatesCreateParams, 'status' | 'score' | 'chapters' | 'episodes' | 'volumes' | 'rewatches' | 'text'>;
export type UserRatesIncrementParams = UserRatesGetByIdParams;
export type UserRatesDeleteParams = UserRatesGetByIdParams;
export interface UserRatesCleanupParams {
  type: 'anime' | 'manga'
}
export type UserRatesResetParams = UserRatesCleanupParams;

export type UserRatesGetResponse = UserRateExtended[];
export type UserRatesGetByIdResponse = UserRateExtended;
export type UserRatesCreateResponse = UserRateExtended;
export type UserRatesUpdateResponse = UserRateExtended;
export type UserRatesIncrementResponse = UserRateExtended;
export type UserRatesDeleteResponse = void;
export interface UserRatesCleanupResponse {
  notice: string;
}
export type UserRatesResetResponse = UserRatesCleanupResponse;

export class UserRatesAPI extends APISchema {
  async get(params: UserRatesGetParams): Promise<UserRatesGetResponse> {
    const response = await this.axios.get('/v2/user_rates', { params });
    return response.data;
  }

  async getById(params: UserRatesGetByIdParams): Promise<UserRatesGetByIdResponse> {
    const response = await this.axios.get(`/v2/user_rates/${params.id}`);
    return response.data;
  }

  async create(params: UserRatesCreateParams): Promise<UserRatesCreateResponse> {
    const response = await this.axios.post('/v2/user_rates', params);
    return response.data;
  }

  async update({ id, ...params }: UserRatesUpdateParams): Promise<UserRatesUpdateResponse> {
    const response = await this.axios.patch(`/v2/user_rates/${id}`, params);
    return response.data;
  }

  async increment(params: UserRatesIncrementParams): Promise<UserRatesIncrementResponse> {
    const response = await this.axios.post(`/v2/user_rates/${params.id}`);
    return response.data;
  }

  async delete(params: UserRatesDeleteParams): Promise<UserRatesDeleteResponse> {
    const response = await this.axios.delete(`/v2/user_rates/${params.id}`);
    return response.data;
  }

  async cleanup(params: UserRatesCleanupParams): Promise<UserRatesCleanupResponse> {
    const response = await this.axios.delete(`/user_rates/${params.type}/cleanup`);
    return response.data;
  }

  async reset(params: UserRatesResetParams): Promise<UserRatesResetResponse> {
    const response = await this.axios.delete(`/user_rates/${params.type}/reset`);
    return response.data;
  }
}