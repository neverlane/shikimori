import { SHIKIMORI_OAUTH_URL } from '~/utils/constants';
import axios, { AxiosInstance } from 'axios';
import { URLSearchParams } from 'url';
import { ShikimoriAuthError } from '~/errors';

export interface UserToken {
  access_token: string;
  token_type: 'Bearer';
  expires_in: number;
  refresh_token: string;
  scope: string;
  created_at: number;
}

export interface AuthOptions {
  appName: string;
  clientId: string;
  clientSecret: string;
}

export class Auth {
  private redirectUri = 'urn:ietf:wg:oauth:2.0:oob';
  private axios: AxiosInstance;

  constructor(public options: AuthOptions) {
    this.axios = axios.create({
      baseURL: SHIKIMORI_OAUTH_URL,
      headers: {
        ['User-Agent']: this.options.appName
      },
      validateStatus: null
    });
    this.axios.interceptors.response.use((response) => {
      if (response.data.error) throw new ShikimoriAuthError({
        code: response.status,
        message: `[${response.data.error}] ${response.data.error_description}`
      });
      return response;
    });
  }

  async refreshToken(refreshToken: string) {
    const params = new URLSearchParams();
    params.append('grant_type', 'refresh_token');
    params.append('client_id', this.options.clientId);
    params.append('client_secret', this.options.clientSecret);
    params.append('refresh_token', refreshToken);
    const response = await this.axios.post('/token', params.toString());
    return response.data;
  }
  
  async getTokenByCode(code: string): Promise<UserToken> {
    const params = new URLSearchParams();
    params.append('grant_type', 'authorization_code');
    params.append('client_id', this.options.clientId);
    params.append('client_secret', this.options.clientSecret);
    params.append('code', code);
    params.append('redirect_uri', this.redirectUri);
    const response = await this.axios.post('/token', params.toString());
    return response.data;
  }
}