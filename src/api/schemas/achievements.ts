import { APISchema } from '~/api/schema';
import { NekoAchievement } from '~/api/definitions';

export interface AchievementsGetParams {
  user_id: number;
}
export type AchievementsGetResponse = NekoAchievement[]

export class AchievementsAPI extends APISchema {
  async get(params: AchievementsGetParams): Promise<AchievementsGetResponse> {
    const response = await this.axios.get('/achievements', { params });
    return response.data;
  }
}