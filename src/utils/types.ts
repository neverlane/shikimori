export type AllowArray<T> = T | T[];
export type Nullable<T> = T | null;
export type NullableArray<T> = T[] | [null];
export type DateString = string;
export type Without<T extends string, K extends T> = T extends K ? never : T;

export type ShikimoriParameterValueType = number | string;
export type ShikimoriSubValue<T extends number | string> = `!${T}`;
export type ShikimoriParameter<T extends ShikimoriParameterValueType = ShikimoriParameterValueType> = AllowArray<T | ShikimoriSubValue<T>>;

export type ShikimoriOrder = 'id' | 'id_desc' | 'ranked' | 'kind' | 'popularity' | 'name' | 'aired_on' | 'episodes' | 'status' | 'random' | 'ranked_random' | 'ranked_shiki' | 'created_at' | 'created_at_desc';
export type ShikimoriRating = 'none' | 'g' | 'pg' | 'pg_13' | 'r' | 'r_plus' | 'rx';
export type ShikimoriKind = 'anime' | 'manga' | 'ranobe';
export type ShikimoriMyListStatus = 'planned' | 'watching' | 'rewatching' | 'completed' | 'on_hold' | 'dropped';