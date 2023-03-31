import { APISchema } from '~/api/schema';

export interface AbuseRequestsMarkOfftopicParams {
  comment_id: string | number; // TODO: check
}
export interface AbuseRequestsReviewParams {
  comment_id?: string | number; // TODO: check
  topic_id?: string | number; // TODO: check
}
export interface AbuseRequestsAbuseParams {
  comment_id?: string | number; // TODO: check
  topic_id?: string | number; // TODO: check
  reason?: string;
}
export type AbuseRequestsSpoilerParams = AbuseRequestsAbuseParams;

export interface AbuseRequestsMarkOfftopicResponse {
  kind: string;
  value: boolean;
  affected_ids: number[];
}
export type AbuseRequestsReviewResponse = void;
export type AbuseRequestsAbuseResponse = void;
export type AbuseRequestsSpoilerResponse = void;

export class AbuseRequestsAPI extends APISchema {
  async markOfftopic(params: AbuseRequestsMarkOfftopicParams): Promise<AbuseRequestsMarkOfftopicResponse> {
    const response = await this.axios.post('/v2/abuse_request/offtopic', params);
    return response.data;
  }

  async review(params: AbuseRequestsReviewParams): Promise<AbuseRequestsReviewResponse> {
    await this.axios.post('/v2/abuse_request/review', params);
  }

  async abuse(params: AbuseRequestsAbuseParams): Promise<AbuseRequestsAbuseResponse> {
    await this.axios.post('/v2/abuse_request/abuse', params);
  }

  async spoiler(params: AbuseRequestsSpoilerParams): Promise<AbuseRequestsSpoilerResponse> {
    await this.axios.post('/v2/abuse_request/spoiler', params);
  }
}