import { APISchema } from '~/api/schema';
import { Calendar } from '~/api/definitions';

export interface CalendarsGetParams {
  censored?: boolean;
}

export type CalendarsGetResponse = Calendar[];

export class CalendarsAPI extends APISchema {
  async get(params: CalendarsGetParams = {}): Promise<CalendarsGetResponse> {
    const response = await this.axios.get('/calendar', { params });
    return response.data;
  }
}