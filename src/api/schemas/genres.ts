import { APISchema } from '~/api/schema';
import { Genre } from '~/api/definitions';

export type GenresGetResponse = Genre[];

export class GenresAPI extends APISchema {
  async get(): Promise<GenresGetResponse> {
    const response = await this.axios.get('/genres');
    return response.data;
  }
}