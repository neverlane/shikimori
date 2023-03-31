import { APISchema } from '~/api/schema';
import { Studio } from '~/api/definitions';

export type StudiosGetResponse = Studio[];

export class StudiosAPI extends APISchema {
  async get(): Promise<StudiosGetResponse> {
    const response = await this.axios.get('/studios');
    return response.data;
  }
}