import { APISchema } from '~/api/schema';
import { DateString } from '~/utils';

export interface EpisodeNotificationsNotifyParams {
  episode_notification?: {
    anime_id: number;
    episode: number;
    aired_at: DateString;
    is_fandub?: boolean;
    is_raw?: boolean;
    is_subtitles?: boolean;
    is_anime365?: boolean;
  }
  token: string;
}

export interface EpisodeNotificationsNotifyResponse {
  anime_id: number;
  episode: number;
  aired_at: DateString;
  is_fandub: boolean;
  is_raw: boolean;
  is_subtitles: boolean;
  is_anime365: boolean;
}

export class EpisodeNotificationsAPI extends APISchema {
  async notify(params: EpisodeNotificationsNotifyParams): Promise<EpisodeNotificationsNotifyResponse> {
    const response = await this.axios.post('/v2/episode_notifications', params);
    return response.data;
  }
}