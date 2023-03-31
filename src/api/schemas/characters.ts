import { APISchema } from '~/api/schema';
import { Character, CharacterShort } from '~/api/definitions';

export interface CharactersGetByIdParams {
  id: number;
}
export interface CharactersSearchParams {
  search?: string;
}

export type CharactersGetByIdResponse = Character;
export type CharactersSearchResponse = CharacterShort[];

export class CharactersAPI extends APISchema {
  async getById(params: CharactersGetByIdParams): Promise<CharactersGetByIdResponse> {
    const response = await this.axios.get(`/characters/${params.id}`);
    return response.data;
  }
  
  async search(params: CharactersSearchParams): Promise<CharactersSearchResponse> {
    const response = await this.axios.get('/characters/search', { params });
    return response.data;
  }
}