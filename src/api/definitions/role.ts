import { Nullable } from '~/utils/types';
import { CharacterShort } from './character';
import { PersonShort } from './person';

export interface Role {
  roles: string[];
  roles_russian: string[];
  character: Nullable<CharacterShort>;
  person: Nullable<PersonShort>;
}