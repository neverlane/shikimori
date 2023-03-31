import { APISchema } from '~/api/schema';
import { Comment } from '~/api/definitions';

export interface CommentsGetParams {
  commentable_id: number;
  commentable_type: 'Topic' | 'User';
  page?: number;
  limit?: number;
  desc?: 1 | 0;
}
export interface CommentsGetByIdParams {
  id: number;
}
export interface CommentsCreateParams {
  broadcast?: boolean;
  comment?: Pick<Comment, 'body' | 'commentable_id' | 'commentable_type' |'is_offtopic'>;
  frontend?: boolean;
}
export interface CommentsUpdateParams {
  id: number;
  body?: string;
  frontend?: boolean;
}
export interface CommentsDestroyParams {
  id: number;
}

export type CommentsGetResponse = Comment[];
export type CommentsGetByIdResponse = Comment;
export type CommentsCreateResponse = Comment;
export type CommentsUpdateResponse = Comment;
export interface CommentsDestroyResponse {
  notice: string;
}

export class CommentsAPI extends APISchema {
  async get(params: CommentsGetParams): Promise<CommentsGetResponse> {
    const response = await this.axios.get('/comments', { params });
    return response.data;
  }

  async getById(params: CommentsGetByIdParams): Promise<CommentsGetByIdResponse> {
    const response = await this.axios.get(`/comments/${params.id}`);
    return response.data;
  }

  async create(params: CommentsCreateParams = {}): Promise<CommentsCreateResponse> {
    const response = await this.axios.post('/comments', params);
    return response.data;
  }

  async update(params: CommentsUpdateParams): Promise<CommentsUpdateResponse> {
    const response = await this.axios.patch(`/comments/${params.id}`, params);
    return response.data;
  }

  async destroy(params: CommentsDestroyParams): Promise<CommentsDestroyResponse> {
    const response = await this.axios.delete(`/comments/${params.id}`);
    return response.data;
  }
}