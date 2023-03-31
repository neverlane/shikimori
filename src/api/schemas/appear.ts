import { APISchema } from '~/api/schema';
import { ShikimoriParameter } from '~/utils/types';

export interface AppearMarkParams {
  ids: ShikimoriParameter;
}

export type AppearMarkResponse = void;

export class AppearAPI extends APISchema {
  async mark(params: AppearMarkParams): Promise<AppearMarkResponse> {
    await this.axios.post('/appears', params);
  }
}