import { AxiosRequestConfig, AxiosResponse } from 'axios';

export interface IShikimoriAPIError {
  code: string | number;
  message: string;
  request?: AxiosRequestConfig;
  response?: AxiosResponse;
  cause?: Error;
} 

export class ShikimoriAPIError extends Error {
  public code: string | number;
  public stack!: string;
  public cause?: Error;
  public request?: AxiosRequestConfig;
  public response?: AxiosResponse;
  
  constructor({ message, code, cause, request, response }: IShikimoriAPIError) {
    super(message, {
      cause
    });
    this.code = code;
    this.name = this.constructor.name;
    this.request = request;
    this.response = response;
  }

  public get [Symbol.toStringTag](): string {
    return this.constructor.name;
  }

  public toJSON(): Pick<this, keyof this> {
    const json = {} as Pick<this, keyof this>;
    for (const key of Object.getOwnPropertyNames(this)) {
      json[key as keyof this] = this[key as keyof this];
    }

    return json;
  }
}