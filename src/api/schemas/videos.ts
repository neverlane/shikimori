import { APISchema } from '~/api/schema';
import { Video } from '~/api/definitions';

export interface VideosGetParams {
  anime_id: number;
}
export interface VideosCreateParams {
  anime_id: number;
  video?: Pick<Video, 'kind' | 'name' | 'url'>
}
export interface VideosDestroyParams {
  anime_id: number;
  id: number;
}

export type VideosGetResponse = Video[];
export type VideosCreateResponse = Video;
export type VideosDestroyResponse = void;

export class VideosAPI extends APISchema {
  async get(params: VideosGetParams): Promise<VideosGetResponse> {
    const response = await this.axios.get(`/animes/${params.anime_id}/videos`);
    return response.data;
  }

  async create(params: VideosCreateParams): Promise<VideosCreateResponse> {
    const response = await this.axios.post(`/animes/${params.anime_id}/videos`);
    return response.data;
  }

  async destroy(params: VideosDestroyParams): Promise<VideosDestroyResponse> {
    await this.axios.delete(`/animes/${params.anime_id}/videos/${params.id}`);
  }
}