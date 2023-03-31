import { APISchema } from '~/api/schema';
import { Dialog, ShikimoriMessage } from '~/api/definitions';

export interface DialogsGetByIdParams {
  id: number;
}
export interface DialogsDestroyParams {
  id: number;
}

export type DialogsGetResponse = Dialog[];
export type DialogsGetByIdResponse = ShikimoriMessage[];
export interface DialogsDestroyResponse {
  notice: string;
}

export class DialogsAPI extends APISchema {
  async get(): Promise<DialogsGetResponse> {
    const response = await this.axios.get('/dialogs');
    return response.data;
  }

  async getById(params: DialogsGetByIdParams): Promise<DialogsGetByIdResponse> {
    const response = await this.axios.get(`/dialogs/${params.id}`);
    return response.data;
  }

  async destroy(params: DialogsDestroyParams): Promise<DialogsDestroyResponse> {
    const response = await this.axios.delete(`/dialogs/${params.id}`);
    return response.data;
  }
}