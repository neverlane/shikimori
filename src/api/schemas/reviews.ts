import { APISchema } from '~/api/schema';
import { Review } from '~/api/definitions';

export interface ReviewsCreateParams {
  frontend?: boolean;
  review: Pick<Review, 'anime_id' | 'body' | 'opinion'>;
}
export interface ReviewsUpdateParams {
  id: number;
  frontend?: boolean;
  review: Partial<Pick<Review, 'body' | 'opinion'>>;
}
export interface ReviewsDestroyParams {
  id: number;
}

export type ReviewsCreateResponse = Review;
export type ReviewsUpdateResponse = Review;
export interface ReviewsDestroyResponse {
  notice: string;
}

export class ReviewsAPI extends APISchema {
  async create(params: ReviewsCreateParams): Promise<ReviewsCreateResponse> {
    const response = await this.axios.post('/reviews', params);
    return response.data;
  }

  async update(params: ReviewsUpdateParams): Promise<ReviewsUpdateResponse> {
    const response = await this.axios.patch(`/reviews/${params.id}`, params);
    return response.data;
  }

  async destroy(params: ReviewsDestroyParams): Promise<ReviewsDestroyResponse> {
    const response = await this.axios.delete(`/reviews/${params.id}`);
    return response.data;
  }
}