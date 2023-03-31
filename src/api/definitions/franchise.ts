import { Nullable } from '~/utils/types';

export type RelationType = string;

export interface FranchiseLinks {
  id: number;
  source_id: number;
  target_id: number;
  source: number;
  target: number;
  weight: number;
  relation: RelationType;
}

export interface FranchiseNode {
  id: number;
  date: number;
  image_url: string;
  url: string;
  year: Nullable<number>;
}

export interface Franchise {
  links: FranchiseLinks[];
  nodes: FranchiseNode[];
  current_id: number;
}