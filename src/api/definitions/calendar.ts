import { DateString, Nullable } from '~/utils/types';
import { AnimeShort } from './anime';

export interface Calendar {
    next_episode: number;
    next_episode_at: DateString;
    duration: Nullable<number>;
    anime: AnimeShort;
}