import { APISchema } from '~/api/schema';
import { UserImage } from '~/api/definitions';

export interface UserImagesCreateParams {
  image: string;
  linked_type?: string;
}

export type UserImagesCreateResponse = UserImage;

export class UserImagesAPI extends APISchema {
  async create(params: UserImagesCreateParams): Promise<UserImagesCreateResponse> {
    const response = await this.axios.post('/user_images', params);
    return response.data;
  }
}