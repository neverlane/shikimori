import { APISchema } from '~/api/schema';
import { ShikimoriHistory, User, UserInfo, UserShort, AnimeShort, ClubShort, MangaShort, UserRate, Ban, ShikimoriMessage } from '~/api/definitions';
import { Nullable, ShikimoriMyListStatus } from '~/utils/types';

export interface UsersGetParams {
  page?: number;
  limit?: number;
}
export interface UsersGetByIdParams {
  id: string | number;
  is_nickname?: 1;
}
export type UsersInfoParams = UsersGetByIdParams;
export type UsersFriendsParams = UsersGetByIdParams;
export type UsersClubsParams = UsersGetByIdParams;
export type UsersRatingsList = 'anime' | 'manga';
export interface UsersAnimeRatesParams extends UsersGetByIdParams {
  page?: number;
  limit?: number;
  status?: ShikimoriMyListStatus;
  censored?: boolean;
}
export type UsersMangaRatesParams = Omit<UsersAnimeRatesParams, 'status'>;
export type UsersRatesParams<T extends UsersRatingsList> = 
  T extends 'anime' ? 
    (Record<'list', 'anime'> & UsersAnimeRatesParams) 
  : T extends 'manga' ? 
    (Record<'list', 'manga'> & UsersMangaRatesParams)
  : never;
export type UsersFavouritesParams = UsersGetByIdParams;
export interface UsersMessagesParams extends UsersGetByIdParams {
  page?: number;
  limit?: number;
  type: 'inbox' | 'private' | 'sent' | 'news' | 'notifications';
}
export type UsersUnreadMessagesParams = UsersGetByIdParams;
export interface UsersHistoryParams extends UsersGetByIdParams {
  page?: number;
  limit?: number;
  target_id?: number;
  target_type?: 'Anime' | 'Manga';
}
export type UsersBansParams = UsersGetByIdParams;
export type UsersIgnoreParams = Record<'id', number>;
export type UsersUnignoreParams = UsersIgnoreParams;

export type UsersGetResponse = UserShort[];
export type UsersGetByIdResponse = User;
export type UsersInfoResponse = UserInfo;
export type UsersWhoamiResponse = Nullable<UserInfo>;
export type UsersSignOutResponse  = void;
export type UsersFriendsResponse = UserShort[];
export type UsersClubsResponse = ClubShort[];
export interface UsersRate<T extends AnimeShort | MangaShort> extends UserRate {
  user: UserShort;
  anime: T extends AnimeShort ? AnimeShort : null;
  manga: T extends MangaShort ? MangaShort : null;
}
export type UsersAnimeRatesResponse = UsersRate<AnimeShort>[];
export type UsersMangaRatesResponse = UsersRate<MangaShort>[];
export type UsersRatesResponse<T extends UsersRatingsList> = 
  T extends 'anime' ? UsersAnimeRatesResponse 
  : T extends 'manga' ? UsersMangaRatesResponse 
  : never;
export interface UserFavourite {
  id: number;
  name: string;
  russian: string; // TODO: check can be null or no
  image: string;
  url: null;
} 
export type UsersFavouritesResponse = Record<'animes' | 'mangas' | 'ranobe' | 'characters' | 'people' | 'mangakas' | 'seyu' | 'producers', UserFavourite[]>
export type UsersMessagesResponse = ShikimoriMessage[];
export type UsersUnreadMessagesResponse = Record<'messages' | 'news' | 'notifications', number>;
export type UsersHistoryResponse = ShikimoriHistory[];
export type UsersBansResponse = Ban[];
export interface UsersIgnoreResponse {
  user_id: string; 
  is_ignored: boolean;
}
export type UsersUnignoreResponse = UsersIgnoreResponse;

export class UsersAPI extends APISchema {
  async get(params: UsersGetParams): Promise<UsersGetResponse> {
    const response = await this.axios.get('/users', { params });
    return response.data;
  }

  async getById(params: UsersGetByIdParams): Promise<UsersGetByIdResponse> {
    const response = await this.axios.get(`/users/${params.id}`, { params });
    return response.data;
  }
  
  async info(params: UsersInfoParams): Promise<UsersInfoResponse> {
    const response = await this.axios.get(`/users/${params.id}/info`, { params });
    return response.data;
  } 
  
  async whoami(): Promise<UsersWhoamiResponse> {
    const response = await this.axios.get('/users/whoami');
    return response.data;
  }
  
  async signOut(): Promise<UsersSignOutResponse> {
    await this.axios.get('/users/sign_out');
  }
  
  async friends(params: UsersFriendsParams): Promise<UsersFriendsResponse> {
    const response = await this.axios.get(`/users/${params.id}/friends`, { params });
    return response.data;
  }
  
  async clubs(params: UsersClubsParams): Promise<UsersClubsResponse> {
    const response = await this.axios.get(`/users/${params.id}/clubs`, { params });
    return response.data;
  }
  
  async animeRates(params: UsersAnimeRatesParams): Promise<UsersAnimeRatesResponse> {
    const response = await this.axios.get(`/users/${params.id}/anime_rates`, { params });
    return response.data;
  }
  
  async mangaRates(params: UsersMangaRatesParams): Promise<UsersMangaRatesResponse> {
    const response = await this.axios.get(`/users/${params.id}/anime_rates`, { params });
    return response.data;
  }
  
  async rates(params: UsersRatesParams<'anime'>): Promise<UsersRatesResponse<'anime'>>
  async rates(params: UsersRatesParams<'manga'>): Promise<UsersRatesResponse<'manga'>>
  async rates<T extends UsersRatingsList>(params: UsersRatesParams<T>): Promise<UsersRatesResponse<T>> {
    const response = await this.axios.get(`/users/${params.id}/${params.list}_rates`, { params });
    return response.data;
  }

  async favourites(params: UsersFavouritesParams): Promise<UsersFavouritesResponse> {
    const response = await this.axios.get(`/users/${params.id}/favourites`, { params });
    return response.data;
  }

  async messages(params: UsersMessagesParams): Promise<UsersMessagesResponse> {
    const response = await this.axios.get(`/users/${params.id}/messages`, { params });
    return response.data;
  }

  async unreadMessages(params: UsersUnreadMessagesParams): Promise<UsersUnreadMessagesResponse> {
    const response = await this.axios.get(`/users/${params.id}/unread_messages`, { params });
    return response.data;
  }

  async history(params: UsersHistoryParams): Promise<UsersHistoryResponse> {
    const response = await this.axios.get(`/users/${params.id}/history`, { params });
    return response.data;
  }
  
  async bans(params: UsersBansParams): Promise<UsersBansResponse> {
    const response = await this.axios.get(`/users/${params.id}/bans`, { params });
    return response.data;
  }

  async ignore(params: UsersIgnoreParams): Promise<UsersIgnoreResponse> {
    const response = await this.axios.post(`/v2/users/${params.id}/ignore`);
    return response.data;  
  }

  async unignore(params: UsersUnignoreParams): Promise<UsersUnignoreResponse> {
    const response = await this.axios.delete(`/v2/users/${params.id}/ignore`);
    return response.data;  
  }
}