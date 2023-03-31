import { APISchema } from '~/api/schema';
import { Ban } from '~/api/definitions';

export type BansGetResponse = Ban[]; 

export class BansAPI extends APISchema {
  async get(): Promise<BansGetResponse> {
    const response = await this.axios.get('/bans');
    return response.data;
  }
}