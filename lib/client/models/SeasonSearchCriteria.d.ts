import type { RequestSort } from './RequestSort';
/**
 * Season search criteria
 */
export type SeasonSearchCriteria = {
    /**
     * Zero-based page number
     */
    pageNumber?: number;
    /**
     * Page size
     */
    pageSize?: number;
    sort?: RequestSort;
    /**
     * Season title
     */
    title?: string;
    /**
     * Minimal season number
     */
    seasonNumberFrom?: number;
    /**
     * Maximal season number
     */
    seasonNumberTo?: number;
    /**
     * Minimal number of episodes in season
     */
    numberOfEpisodesFrom?: number;
    /**
     * Maximal number of episodes in season
     */
    numberOfEpisodesTo?: number;
};
