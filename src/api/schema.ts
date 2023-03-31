import type { API } from './api';

export class APISchema {
  constructor(protected api: API) {}

  protected get axios() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return this.api.request;
  }
}