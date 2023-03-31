import { Nullable, DateString } from '~/utils/types';
import { ShikimoriImageSizes } from './shikimori-image';

export interface Linked {
  id: number;
  name: string;
  russian: string;
  image: ShikimoriImageSizes;
  url: string;
  kind: string;
  status: string;
  score: string;
  aired_on: Nullable<DateString>;
  released_on: Nullable<DateString>;
}