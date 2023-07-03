import type { EpisodeBase } from './EpisodeBase';
import type { SeriesBase } from './SeriesBase';
/**
 * Full location, returned when queried using UID
 */
export type SeasonFull = {
    /**
     * Season unique ID
     */
    uid: string;
    /**
     * Season title
     */
    title: string;
    series?: SeriesBase;
    /**
     * Season number in series
     */
    seasonNumber?: number;
    /**
     * Number of episodes in this season
     */
    numberOfEpisodes?: number;
    /**
     * Episodes in this season
     */
    episodes?: Array<EpisodeBase>;
};
