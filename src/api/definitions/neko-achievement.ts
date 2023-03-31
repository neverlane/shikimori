import { DateString } from '~/utils/types';

export interface NekoAchievement {
  id: number;
  neko_id: string;
  level: number;
  progress: number;
  user_id: number;
  created_at: DateString;
  updated_at: DateString;
}