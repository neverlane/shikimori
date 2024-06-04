import { name, version } from '../../package.json';

export const RUNNING_IN_BROWSER = typeof window !== 'undefined';
export const RUNNING_IN_NODE = !RUNNING_IN_BROWSER;

export const SHIKIMORI_URL = 'https://shikimori.one';
export const SHIKIMORI_API_URL = SHIKIMORI_URL + '/api';
export const SHIKIMORI_OAUTH_URL = SHIKIMORI_URL + '/oauth';
export const API_USER_AGENT = `${name}/${version} (${RUNNING_IN_NODE ? `NodeJS ${process.version}` : 'Browser'})`;