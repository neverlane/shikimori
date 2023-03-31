import { APISchema } from '~/api/schema';
import { Forum } from '~/api/definitions';

export type ForumsGetResponse = Forum[];

export class ForumsAPI extends APISchema {
  async get(): Promise<ForumsGetResponse> {
    const response = await this.axios.get('/forums');
    return response.data;
  }
}