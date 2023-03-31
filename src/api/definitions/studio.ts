import { Nullable } from '~/utils/types';

export interface Studio {
  id: number;
  name: string;
  filtred_name: string;
  real: boolean;
  image: Nullable<string>;
}