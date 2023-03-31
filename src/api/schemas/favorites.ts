import { APISchema } from '~/api/schema';

export interface FavoritesCreateParams {
  linked_id: number;
  linked_type: 'Anime' | 'Manga' | 'Ranobe' | 'Person' | 'Character';
  kind?:  'common' | 'seyu' | 'mangaka' | 'producer' | 'person';
}
export interface FavoritesDestroyParams {
  linked_id: number;
  linked_type: 'Anime' | 'Manga' | 'Ranobe' | 'Person' | 'Character';
}
export interface FavoritesReorderParams {
  id: number;
  new_index?: string;
}

export interface FavoritesCreateResponse {
  success: boolean;
  notice: string;
}
export interface FavoritesDestroyResponse {
  success: boolean;
  notice: string;
}
export type FavoritesReorderResponse = void;

export class FavoritesAPI extends APISchema {
  async create(params: FavoritesCreateParams): Promise<FavoritesCreateResponse> {
    const response = await this.axios.post(`/favorites/${params.linked_type}/${params.linked_id}${params.kind ? '/' + params.kind : ''}`);
    return response.data;
  }

  async destroy(params: FavoritesDestroyParams): Promise<FavoritesDestroyResponse> {
    const response = await this.axios.delete(`/favorites/${params.linked_type}/${params.linked_id}`);
    return response.data;
  }

  async reorder(params: FavoritesReorderParams): Promise<FavoritesReorderResponse> {
    await this.axios.post(`/favorites/${params.id}/reorder`, params);
  }
}