import type { SeriesHeader } from './SeriesHeader';
/**
 * Base season, returned in search results
 */
export type SeasonBase = {
    /**
     * Season unique ID
     */
    uid: string;
    /**
     * Season title
     */
    title: string;
    series?: SeriesHeader;
    /**
     * Season number in series
     */
    seasonNumber?: number;
    /**
     * Number of episodes in this season
     */
    numberOfEpisodes?: number;
};
