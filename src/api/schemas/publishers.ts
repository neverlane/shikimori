import { APISchema } from '~/api/schema';
import { Publisher } from '~/api/definitions';

export type PublishersGetResponse = Publisher[];

export class PublishersAPI extends APISchema {
  async get(): Promise<PublishersGetResponse> {
    const response = await this.axios.get('/publishers');
    return response.data;
  }
}