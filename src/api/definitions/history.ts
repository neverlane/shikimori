import { DateString, Nullable } from '~/utils/types';
import { BaseModel } from './model';

export interface ShikimoriHistory {
  id: number;
  created_at: DateString;
  description: string;
  target: Nullable<BaseModel>;
}