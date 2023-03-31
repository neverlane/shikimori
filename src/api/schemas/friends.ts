import { APISchema } from '~/api/schema';

export interface FriendsCreateParams {
  id: number | string;
}
export interface FriendsDestroyParams {
  id: number | string;
}

export interface FriendsCreateResponse {
  notice: string;
}
export interface FriendsDestroyResponse {
  notice: string;
}

export class FriendsAPI extends APISchema {
  async create(params: FriendsCreateParams): Promise<FriendsCreateResponse> {
    const response = await this.axios.post(`/friends/${params.id}`);
    return response.data;
  }

  async destroy(params: FriendsDestroyParams): Promise<FriendsDestroyResponse> {
    const response = await this.axios.delete(`/friends/${params.id}`);
    return response.data;
  }
}