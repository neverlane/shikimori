import { ShikimoriMessageShort } from './shikimori-message';
import { UserShort } from './user';

export interface Dialog {
  target_user: UserShort;
  message: ShikimoriMessageShort;
}