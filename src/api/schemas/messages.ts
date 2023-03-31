import { APISchema } from '~/api/schema';
import { ShikimoriMessage } from '~/api/definitions';

export interface MessagesGetParams {
  id: number;
}

export interface MessagesCreateParams {
  frontend?: boolean;
  message?: {
    kind: string;
    body: string;
  };
  from_id: number;
  to_id: number;
}

export interface MessagesUpdateParams {
  id: number;
  frontend?: boolean;
  message: {
    body: string;
  };
}

export interface MessagesDestroyParams {
  id: number;
}

export interface MessagesMarkReadParams {
  ids?: string;
  is_read?: number;
}

export interface MessagesReadAllParams {
  frontend?: boolean;
  type: string;
}

export interface MessagesDeleteAllParams {
  frontend?: boolean;
  type: string;
}

export type MessagesGetResponse = ShikimoriMessage;
export type MessagesCreateResponse = ShikimoriMessage;
export type MessagesUpdateResponse = ShikimoriMessage;
export type MessagesDestroyResponse = void;
export type MessagesMarkReadResponse = void;
export type MessagesReadAllResponse = void;
export type MessagesDeleteAllResponse = void;

export class MessagesAPI extends APISchema {
  async get(params: MessagesGetParams): Promise<MessagesGetResponse> {
    const response = await this.axios.get(`/messages/${params.id}`);
    return response.data;
  }

  async create(params: MessagesGetParams): Promise<MessagesCreateResponse> {
    const response = await this.axios.post('/messages', { params });
    return response.data;
  }

  async update(params: MessagesUpdateParams): Promise<MessagesUpdateResponse> {
    const response = await this.axios.patch(`/messages/${params.id}`);
    return response.data;
  }

  async destroy(params: MessagesDestroyParams): Promise<MessagesDestroyResponse> {
    const response = await this.axios.delete(`/messages/${params.id}`);
    return response.data;
  }

  async markRead(params: MessagesMarkReadParams): Promise<MessagesMarkReadResponse> {
    const response = await this.axios.post('/messages/mark_read', { params });
    return response.data;
  }

  async readAll(params: MessagesReadAllParams): Promise<MessagesReadAllResponse> {
    const response = await this.axios.post('/messages/read_all', { params });
    return response.data;
  }

  async deleteAll(params: MessagesDeleteAllParams): Promise<MessagesDeleteAllResponse> {
    const response = await this.axios.post('/messages/delete_all', { params });
    return response.data;
  }
}