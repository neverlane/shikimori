import { APISchema } from '~/api/schema';
import { StyleOwnerType, Style } from '~/api/definitions';

export interface StylesGetParams {
  id: number;
}

export interface StylesPreviewParams {
  style: Pick<StylesCreateParams['style'], 'css'>;
}

export interface StylesCreateParams {
  style: {
    css: string;
    name: string;
    owner_id: number;
    owner_type: StyleOwnerType;
  };
}

export interface StylesUpdateParams extends StylesGetParams {
  style: Partial<Pick<StylesCreateParams['style'], 'css' | 'name'>>;
}

export type StylesGetResponse = Style;
export type StylesPreviewResponse = Record<Exclude<keyof Style, 'name' | 'css' | 'compiled_css'>, null> & Pick<Style, 'name' | 'css'> & Record<'compiled_css', string>;
export type StylesCreateResponse = Style;
export type StylesUpdateResponse = Style;

export class StylesAPI extends APISchema {
  async get(params: StylesGetParams): Promise<StylesGetResponse> {
    const response = await this.axios.get(`/styles/${params.id}`);
    return response.data;
  }
    
  async preview(params: StylesPreviewParams): Promise<StylesPreviewResponse> {
    const response = await this.axios.post('/styles/preview', params);
    return response.data;
  }

  async create(params: StylesCreateParams): Promise<StylesCreateResponse> {
    const response = await this.axios.post('/styles', params);
    return response.data;
  }

  async update(params: StylesUpdateParams): Promise<StylesUpdateResponse> {
    const response = await this.axios.patch(`/styles/${params.id}`, params);
    return response.data;
  }
}