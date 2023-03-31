import { APISchema } from '~/api/schema';

export type StatsGetResponse = number[];

export class StatsAPI extends APISchema {
  async activeUsers(): Promise<StatsGetResponse> {
    const response = await this.axios.get('/stats/active_users');
    return response.data;
  }
}