import { APISchema } from '~/api/schema';
import { Person, PersonShort } from '~/api/definitions';

export interface PeopleGetByIdParams {
  id: number;
}
export interface PeopleSearchParams {
  search?: string;
  kind?: 'seyu' | 'mangaka' | 'producer';
}

export type PeopleGetByIdResponse = Person;
export type PeopleSearchResponse = PersonShort[];

export class PeopleAPI extends APISchema {
  async getById(params: PeopleGetByIdParams): Promise<PeopleGetByIdResponse> {
    const response = await this.axios.get(`/people/${params.id}`);
    return response.data;
  }

  async search(params: PeopleSearchParams): Promise<PeopleSearchResponse> {
    const response = await this.axios.get('/people/search', { params });
    return response.data;
  }
}