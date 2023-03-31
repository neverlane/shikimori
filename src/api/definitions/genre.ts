import { ShikimoriKind } from '~/utils/types';

export interface Genre<Kind extends ShikimoriKind = ShikimoriKind> {
  id: number;
  name: string;
  russian: string;
  kind: Kind;
}